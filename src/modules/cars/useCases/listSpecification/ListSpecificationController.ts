import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { Request, Response } from "express";

class ListSpecificationController {
  constructor(private specificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.specificationUseCase.execute();

    return response.status(200).json(all);
  }
}

export { ListSpecificationController }