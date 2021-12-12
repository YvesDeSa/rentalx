import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategotyUseCase = new ImportCategoryUseCase()
const importCategoryController = new ImportCategoryController(importCategotyUseCase);

export { importCategoryController };