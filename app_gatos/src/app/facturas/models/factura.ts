import {ItemFactura} from './item-factura';
import {User} from '../../empleado/user';

export class Factura {
  id: number;
  descripcion: string;
  observacion: string;
  createAt: string;
  items: ItemFactura[] = [];
  empleado: User;
  total: number;
}
