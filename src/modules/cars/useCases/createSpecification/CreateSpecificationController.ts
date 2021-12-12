import { Request , Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


class CreateSpecificationController {
  constructor(private specificationUseCase: CreateSpecificationUseCase) {}

  handle(request: Request, response: Response){
    const { name, description } = request.body;

    const specification = this.specificationUseCase.execute({
      name, 
      description
    });

    return response.status(201).json(specification);
  }
}

export { CreateSpecificationController }