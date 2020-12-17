import { Component, OnInit } from '@angular/core';
import {Factura} from './models/factura';
import {UserService} from '../empleado/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})
export class FacturasComponent implements OnInit {

  title: string = 'Nueva Factura';
  factura: Factura = new Factura();
  constructor(private empleadoService: UserService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let empleadoId = +params.get('empleadoId');
      this.empleadoService.getUser(empleadoId).subscribe(empleado => this.factura.empleado = empleado);
    });
  }

}
