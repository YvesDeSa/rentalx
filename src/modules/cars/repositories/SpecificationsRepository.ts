import { specificationRouter } from "../../../routes/Specification.routes";
import { Specification } from "../model/Specification";
import { 
  ICreateSpecificationDTO, 
  ISpecificationsRepository 
} from "./ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  
  private static instance: SpecificationRepository;
  
  private constructor(){
    this.specifications = [];
  }

  public static getIntance(): SpecificationRepository{
    if(!SpecificationRepository.instance){
      return new SpecificationRepository();
    }

    return SpecificationRepository.instance;
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