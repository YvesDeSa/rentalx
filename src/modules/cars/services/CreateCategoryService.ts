import { Category } from "../model/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): Category {
    const categotyAlreadyExistis = this.categoriesRepository.findByName(name);

    if(categotyAlreadyExistis){
     throw new Error("Category already existis.");
    }

    const category = this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  };
};

export { CreateCategoryService };
