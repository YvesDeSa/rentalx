import { Category } from "../model/Category";

interface ICreateCategoryDTO{
  name: string;
  description: string;
};

class CategoriesRepository {
  private categories: Category [];

  constructor() {
    this.categories = [];
  };

  create({ name, description }: ICreateCategoryDTO ): Category {
    const categoty = new Category();

    Object.assign(categoty, {
      name,
      description,
      create_at: new Date()
    });
  
    this.categories.push(categoty);

    return categoty;
  };

  list(): Category[] {
    return this.categories;
  };

  findByName(name: string): Category | undefined {
    const category = this.categories.find(
      (category) => category.name === name
    );

    return category;
  };
};

export { CategoriesRepository }