export interface WarehousesEntity {
  id: Number,
  nameWarehouse: String
  production: [
    {
      id: Number
      nameProduct: String
      amount: Number
    }
  ]
}