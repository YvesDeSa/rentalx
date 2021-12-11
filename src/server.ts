import express from "express";

import { categoriesRoutes } from "./routes/Categories.routes";
import { specificationRouter } from "./routes/Specification.routes";

const app = express();

app.use(express.json());

app.use("/categories",categoriesRoutes);
app.use("/specification",specificationRouter);

app.listen(3333, () => {
  console.log("🚀 Server is running...")
});
