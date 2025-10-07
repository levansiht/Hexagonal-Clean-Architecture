import "module-alias/register";

import { config } from "dotenv";
import express from "express";
import type { Request, Response } from "express";
import { sequelize } from "@share/component/sequelize.js";
import { setupCategoryHexagon } from "./modules/index.js";
import { setupBrandHexagon } from "./modules/brand/index.js";

config();

(async () => {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");

  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  app.get("/", (req: Request, res: Response) => {
    res.send("Hello 200Lab!");
  });

  app.use("/v1", setupCategoryHexagon(sequelize));
  app.use("/v1", setupBrandHexagon(sequelize));

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
})();
