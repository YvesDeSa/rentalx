import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { 
  ICreateSpecificationDTO, 
  ISpecificationsRepository 
} from "../ISpecificationsRepository";

class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  
  constructor(){
    this.repository = getRepository(Specification);
  }

  async list(): Promise<Specification[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Specification | undefined> {
    return this.repository.findOne({name});
  };


  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description
    });

    await this.repository.save(specification);
  }
}

export { SpecificationRepository }