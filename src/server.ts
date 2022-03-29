import "reflect-metadata"

import express from "express";

import "express-async-errors";

import swaggerUi from "swagger-ui-express";

import { routers } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

import "./shared/container";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routers);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(err)
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error.',
  });

});

app.listen(3333, () => {
  console.log("🚀 Server is running in port 3333")
});
