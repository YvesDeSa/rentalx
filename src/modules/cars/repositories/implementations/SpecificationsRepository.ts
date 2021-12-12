import { Specification } from "../../model/Specification";
import { 
  ICreateSpecificationDTO, 
  ISpecificationsRepository 
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private specifications: Specification[];
  
  private static INSTANCE: SpecificationRepository;
  
  private constructor(){
    this.specifications = [];
  }

  public static getIntance(): SpecificationRepository{
    if(!SpecificationRepository.INSTANCE){
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }

    return SpecificationRepository.INSTANCE;
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  };


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