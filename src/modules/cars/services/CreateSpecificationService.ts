import { Specification } from "../model/Specification";
import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute({ name , description }: IRequest): Specification{
    const specificationAlreadyExistis = this.specificationRepository.findByName(name);

    if(specificationAlreadyExistis)
      throw new Error("Specification already existis."); 

    const specification = this.specificationRepository.create({
      name,
      description
    })

    return specification;
  }
}

export { CreateSpecificationService }