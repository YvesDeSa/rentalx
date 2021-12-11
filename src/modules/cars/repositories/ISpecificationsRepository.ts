import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO{
  name: string;
  description: string;
};

interface ISpecificationsRepository {
  findByName(name: string): Specification | undefined;
  create({ description, name }: ICreateSpecificationDTO): Specification;
  list(): Specification[];
};

export { ISpecificationsRepository, ICreateSpecificationDTO};