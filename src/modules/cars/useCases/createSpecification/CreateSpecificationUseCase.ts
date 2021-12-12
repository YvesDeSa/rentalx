import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const categotyAlreadyExistis = this.specificationRepository.findByName(name);

    if(categotyAlreadyExistis){
     throw new Error("Category already existis.");
    };

    const category = this.specificationRepository.create({
      name,
      description,
    });

    return category;
  };
}

export { CreateSpecificationUseCase }