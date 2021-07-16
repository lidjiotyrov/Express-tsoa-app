import {Entity, ObjectIdColumn, Column} from "typeorm"

@Entity()
export class WarehousesEntity {
  @ObjectIdColumn()
  id: number

  @Column()
  product: string;

  @Column()
  amount: number
}