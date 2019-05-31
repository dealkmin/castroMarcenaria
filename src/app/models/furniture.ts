import { Material } from './material';

export class Furniture {
  id: number;
  height: number;
  width: number;
  depth: number;
  drawerCount: number;
  doorCount: number;
  observation: string;
  material: Material;
}
