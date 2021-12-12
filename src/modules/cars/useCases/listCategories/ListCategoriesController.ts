import { Request, Response } from "express";

import { ListCategoriesUseCase } from "./listCategoriesUseCase"

class ListCategoriescontroller {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response{
    const all = this.listCategoriesUseCase.execute();

    return response.json(all);
  };

};

export { ListCategoriescontroller };