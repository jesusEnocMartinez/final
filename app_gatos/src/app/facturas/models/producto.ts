import {Proveedor} from '../../proveedor/proveedor';

export class Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  medida: string;
  createAt: string;
  proveedor: Proveedor;
}
