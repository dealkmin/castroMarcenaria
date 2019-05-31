import { Furniture } from './furniture';

export class Order {
  id: number;
  createdTime: Date;
  status: string;
  furnitureList: Furniture[];
}
