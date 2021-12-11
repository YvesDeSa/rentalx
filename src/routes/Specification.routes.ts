import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRouter = Router();
const specificationRepository = new SpecificationRepository;

specificationRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const specificationService = new CreateSpecificationService(specificationRepository);

  const specification = specificationService.execute({
    name, 
    description
  });

  return response.status(201).json(specification);

});

specificationRouter.get("/", (request, response) => {
  
  const all = specificationRepository.list();

  return response.status(200).json(all);

})

export { specificationRouter };