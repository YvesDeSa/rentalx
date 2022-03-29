import { Router } from "express";

import { authenticateRoutes } from "./Authenticate.routes";
import { categoriesRoutes } from "./Categories.routes";
import { specificationRouter } from "./Specification.routes";
import { userRouter } from "./Users.routes";

const routers = Router();

routers.use(authenticateRoutes);
routers.use("/categories", categoriesRoutes);
routers.use("/specifications", specificationRouter);
routers.use("/users", userRouter);

export { routers };