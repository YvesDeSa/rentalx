import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRouter = Router();
const specificationRepository = SpecificationRepository.getIntance();

specificationRouter.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRouter.get("/", (request, response) => {
  
  const all = specificationRepository.list();

  return response.status(200).json(all);

})

export { specificationRouter };