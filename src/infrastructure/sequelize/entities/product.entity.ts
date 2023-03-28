import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'Product' })
export class ProductEntity extends Model {
  @Column
  name: string;

  @Column
  price: number;

  @Column
  description: string;
}
