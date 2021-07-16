import {WarehousesEntity} from "./warehouses.entity";
import databaseManager from '../database'


export class WarehousesRepository {
  
  async getAll() {
    databaseManager.connection.mongoManager.insert(WarehousesEntity, {id:3, product:"tesdassdste", amount:23})

    return await databaseManager.connection.mongoManager.find(WarehousesEntity)
  }
}