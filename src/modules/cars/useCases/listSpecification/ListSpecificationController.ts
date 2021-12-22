import { ListSpecificationUseCase } from "./ListSpecificationUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

class ListSpecificationController {

  async handle(request: Request, response: Response): Promise<Response> {
    const specificationUseCase = container.resolve(ListSpecificationUseCase);

    const all = await specificationUseCase.execute();

    return response.status(200).json(all);
  }
}

export { ListSpecificationController }