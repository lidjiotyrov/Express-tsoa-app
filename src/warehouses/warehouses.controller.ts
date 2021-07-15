import {
  Route,
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Security,
  Query,
  Body,
  Response,
  Tags, SuccessResponse
} from "tsoa";
import {WarehousesService} from "./warehouses.service";
import {WarehousesEntity} from "./warehouses.entity";



@Tags('Warehouses')
@Route()
export class WarehousesController extends Controller{
  constructor( private readonly _warehousesService: WarehousesService = new WarehousesService()) {
    super();
  }

  @SuccessResponse(200, 'OK')
  @Get('/warehouses')
  async getAll(): Promise<WarehousesEntity[]> {
    return this._warehousesService.getAll()
  }
}
