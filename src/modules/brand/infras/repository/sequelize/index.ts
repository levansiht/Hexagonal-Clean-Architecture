import { Sequelize } from "sequelize";
import { BrandCondDTO, BrandUpdateDTO } from "../../../model/dto";
import { Brand } from "../../../model/model";
import { BaseRepositorySequelize } from "../../../../../share/repository/base-repo-sequelize";
import { modelName } from "./dto";


export class MySQLBrandRespository extends BaseRepositorySequelize<Brand, BrandCondDTO, BrandUpdateDTO> {
  constructor(sequelize: Sequelize) {
    super(sequelize, modelName);
  }
}
