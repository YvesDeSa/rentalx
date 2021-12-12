import { Router } from "express";

import { categoriesRoutes } from "./Categories.routes";
import { specificationRouter } from "./Specification.routes";

const routers = Router();

routers.use("/categories",categoriesRoutes);
routers.use("/specification",specificationRouter);

export { routers };