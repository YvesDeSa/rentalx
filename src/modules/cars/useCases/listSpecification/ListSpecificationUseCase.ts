import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";

class ListSpecificationUseCase {
  constructor(private spescificationRepository: SpecificationRepository) {}
  
  execute(){
    return this.spescificationRepository.list();
  }
}

export { ListSpecificationUseCase }