import { warehousesSchema } from "./warehouses.dto";
const errorHandler = require('../../utils/errorHandler')


export class WarehousesRepository {
  
  async getAll() {
    try {
      return await warehousesSchema.find()
    } catch (e) {
      errorHandler(e)
    }
  }

}