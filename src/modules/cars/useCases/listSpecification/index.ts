import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationController } from "./listSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificationRepository = SpecificationRepository.getIntance();
const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository);
const listSpecificationController = new ListSpecificationController(listSpecificationUseCase);

export { listSpecificationController };