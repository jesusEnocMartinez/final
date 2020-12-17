import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Factura} from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private urlEndPoint: string = 'http://localhost:8888/api/facturas';

  constructor(private httpClient: HttpClient) { }

  getFactura(id: number): Observable<Factura> {
    return this.httpClient.get<Factura>(`${this.urlEndPoint}/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlEndPoint}/${id}`);
  }
}
