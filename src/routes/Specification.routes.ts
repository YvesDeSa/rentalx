import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

const specificationRouter = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRouter.post("/", createSpecificationController.handle);

const listSpecificationController = new ListSpecificationController();
specificationRouter.get("/", listSpecificationController.handle);

export { specificationRouter };