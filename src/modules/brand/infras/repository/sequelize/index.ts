import { BrandCondDTO, BrandUpdateDTO } from "@modules/brand/model/dto";
import { Sequelize } from "sequelize";
import { modelName } from "./dto";
import { Brand } from "@/modules/brand/model/model";
import { BaseCommandRepositorySequelize, BaseQueryRepositorySequelize, BaseRepositorySequelize } from "@/share/repository/base-repo-sequelize";

export class MySQLBrandRespository extends BaseRepositorySequelize<Brand, BrandCondDTO, BrandUpdateDTO> {
  constructor(sequelize: Sequelize) {
    super(
      new MySQLQueryRepository(sequelize, modelName),
      new MySQLCommandRepository(sequelize, modelName)
    );
  }
}

export class MySQLQueryRepository extends BaseQueryRepositorySequelize<Brand, BrandCondDTO> {}
export class MySQLCommandRepository extends BaseCommandRepositorySequelize<Brand, BrandUpdateDTO> {}
