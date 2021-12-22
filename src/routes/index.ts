import { Router } from "express";

import { categoriesRoutes } from "./Categories.routes";
import { specificationRouter } from "./Specification.routes";
import { userRouter } from "./Users.routes";

const routers = Router();

routers.use("/categories",categoriesRoutes);
routers.use("/specifications",specificationRouter);
routers.use("/users", userRouter)

export { routers };