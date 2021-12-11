import { Specification } from "../model/Specification";
import { 
  ICreateSpecificationDTO, 
  ISpecificationsRepository 
} from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor(){
    this.specifications = [];
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      specificationFind => { specificationFind.name === name }
    );

    return specification;
  }

  create({ description, name }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();
    
    Object.assign(specification, {
      name, 
      description,
      create_at: new Date()
    });

    this.specifications.push(specification);

    return specification;
  }
}

export { SpecificationRepository }