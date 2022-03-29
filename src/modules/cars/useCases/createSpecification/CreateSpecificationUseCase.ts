import { inject, injectable } from "tsyringe";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationsRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExistis = await this.specificationRepository.findByName(name);

    if (specificationAlreadyExistis) {
      throw new Error("Category already existis.");
    };

    this.specificationRepository.create({
      name,
      description,
    });

  };
}

export { CreateSpecificationUseCase }