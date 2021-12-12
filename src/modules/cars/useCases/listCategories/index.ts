import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriescontroller } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./listCategoriesUseCase";

const categoriesReponsitory = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesReponsitory);
const listCategoriesController = new ListCategoriescontroller(listCategoriesUseCase);

export { listCategoriesController };