const mongoose = require('mongoose')
const Schema = mongoose.Schema


export const warehousesSchema = new Schema({
  warehouses: [
    {
      id: {
        type: Number,
        required: true
      },

      nameWarehouse: {
        type: String,
        required: true
      },

      production: [
        {
          id: {
            type: Number,
            required: true
          },
          nameProduct: {
            type: String,
            required: true
          },
          amount: {
            type: Number,
            required: true
          }
        }
      ]
    }
  ]
})

