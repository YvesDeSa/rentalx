import { request, Router } from "express";

import { authenticateRoutes } from "./Authenticat.routes";
import { categoriesRoutes } from "./Categories.routes";
import { specificationRouter } from "./Specification.routes";
import { userRouter } from "./Users.routes";

const routers = Router();

routers.use("/categories",categoriesRoutes);
routers.use("/specifications",specificationRouter);
routers.use("/users", userRouter);
routers.use(authenticateRoutes);

export { routers };