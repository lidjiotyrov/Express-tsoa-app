import { WarehousesRepository } from "./warehouses.repository";
import { WarehousesEntity } from "./warehouses.entity";
import { WarehousesOutput } from "./warehouses.dto"


export class WarehousesService {
  constructor(
      private readonly _warehousesRepository: WarehousesRepository = new WarehousesRepository()
  ) {}

  async getAll(): Promise<WarehousesOutput[]> {
    const warehousesEntities = await this._warehousesRepository.getAll()

    return warehousesEntities.map(WarehousesService.mapWarehousesEntityToWarehousesOutput)
  }

  private static mapWarehousesEntityToWarehousesOutput(warehousesEntity: WarehousesEntity): WarehousesOutput {
    const {
      id,
      product,
      amount,
    } = warehousesEntity
    return {
      id,
      product,
      amount,
    }
  }

}