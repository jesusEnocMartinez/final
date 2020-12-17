import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { UserComponent } from './empleado/user.component';
import { FormComponent } from './empleado/form.component';
import { PaginatorComponent } from './paginator/paginator.component';

import { UserService } from './empleado/user.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { DetalleComponent } from './empleado/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { RoleGuard } from './usuarios/guards/role.guard';
import { TokenInterceptor } from './usuarios/interceptors/token.interceptor';
import { AuthInterceptor } from './usuarios/interceptors/auth.interceptor';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { DetalleFacturaComponent } from './facturas/detalle-factura.component';
import { FacturasComponent } from './facturas/facturas.component';

registerLocaleData(localeEs, 'es');

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'empleados', component: UserComponent },
  {path: 'empleados/page/:page', component: UserComponent },
  {path: 'empleados/form', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data:{role: 'ROLE_ADMIN'} },
  {path: 'empleados/form/:id', component: FormComponent, canActivate: [AuthGuard, RoleGuard], data:{role: 'ROLE_ADMIN'} },
  {path: 'login', component: LoginComponent},
  {path: 'facturas/:id', component: DetalleFacturaComponent},
  {path: 'facturas/form/:empleadoId', component: FacturasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    UserComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent,
    ProveedorComponent,
    DetalleFacturaComponent,
    FacturasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
