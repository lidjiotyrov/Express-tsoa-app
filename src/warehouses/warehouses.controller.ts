import {
  Route,
  Controller,
  Post,
  Tags, SuccessResponse
} from "tsoa";
import {WarehousesService} from "./warehouses.service";
import {verify} from "./VerificationService";



@Tags('Warehouses')
@Route()
export class WarehousesController extends Controller{
  constructor( private readonly _warehousesService: WarehousesService = new WarehousesService()) {
    super();
  }

  @SuccessResponse(200, 'OK')
  @Post('/warehouses')
  async getAll(): Promise<(requestId: any, encryptedFile: any) => Promise<any>> {
    return verify
  }
}
