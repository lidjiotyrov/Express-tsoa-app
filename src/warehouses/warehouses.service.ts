import {WarehousesRepository} from "./warehouses.repository";
import {WarehousesEntity} from "./warehouses.entity";


export class WarehousesService {
  constructor(
      private readonly _warehousesRepository: WarehousesRepository = new WarehousesRepository()
  ) {}

  async getAll(): Promise<WarehousesEntity[]> {

    return await this._warehousesRepository.getAll()
  }

}