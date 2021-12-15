import express from "express";
import swaggerUi  from "swagger-ui-express";

import { routers } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routers);

app.listen(3333, () => {
  console.log("🚀 Server is running in port 3333")
});
