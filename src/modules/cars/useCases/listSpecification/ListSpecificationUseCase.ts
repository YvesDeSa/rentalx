import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private spescificationRepository: ISpecificationsRepository) {}
  
  async execute(){
    return await this.spescificationRepository.list();
  }
}

export { ListSpecificationUseCase }