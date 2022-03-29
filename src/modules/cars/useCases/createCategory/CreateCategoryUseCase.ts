import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<Category> {
    const categotyAlreadyExistis = await this.categoriesRepository.findByName(name);

    if (categotyAlreadyExistis) {
      throw new AppError("Category already existis.");
    }

    return await this.categoriesRepository.create({
      name,
      description,
    });
  };
};

export { CreateCategoryUseCase };
