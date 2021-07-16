import {Repository} from "typeorm";
import {WarehousesEntity} from "./warehouses.entity";
import databaseManager from '../database'


export class WarehousesRepository {
  private static get _repository(): Repository<WarehousesEntity> {
    return databaseManager.connection.getRepository(WarehousesEntity)
  }
  
  async getAll() {
    return await WarehousesRepository._repository.find()
  }
}