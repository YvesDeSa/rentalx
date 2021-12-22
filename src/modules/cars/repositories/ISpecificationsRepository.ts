import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO{
  name: string;
  description: string;
};

interface ISpecificationsRepository {
  findByName(name: string): Promise<Specification | undefined>;
  create({ description, name }: ICreateSpecificationDTO): Promise<void>;
  list(): Promise<Specification[]>;
};

export { ISpecificationsRepository, ICreateSpecificationDTO };