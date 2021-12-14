import fs from "fs";
import { parse } from 'csv-parse';
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

interface IImportCategry {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: CategoriesRepository) {}
 
  loadCategories(file: Express.Multer.File): Promise<IImportCategry[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories : IImportCategry[] = [];
  
      const parseFile = parse({ delimiter: ';' });
  
      stream.pipe(parseFile);
  
      parseFile.on("data",async (line) => {
        const [name, description] = line;
        categories.push({
          name,
          description
        });
      }).on("end", ()=> {
        fs.promises.unlink(file.path);
        resolve(categories);
      }).on("error", (err) => {
        reject(err);
      })
    });
  }

  async execute(file: Express.Multer.File): Promise<void>{
    const categories = await this.loadCategories(file);
    
    categories.map(async (category) => {
      const { name, description }= category;

      const existiCategory = this.categoryRepository.findByName(name);

      if(!existiCategory){
        this.categoryRepository.create({
          name, 
          description
        });
      }
    });
  }
}

export { ImportCategoryUseCase }