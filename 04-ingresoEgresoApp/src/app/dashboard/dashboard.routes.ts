import { Routes } from "@angular/router";
import { EstadisticaComponent } from "../ingreso-egreso/estadistica/estadistica.component";
import { IngresoEgresoComponent } from "../ingreso-egreso/ingreso-egreso.component";
import { DetalleComponent } from "../ingreso-egreso/detalle/detalle.component";

export const dashboardRoutes: Routes = [
  {
    path: 'ingreso-egreso',
    component: IngresoEgresoComponent
  },
  {
    path: 'detalle',
    component: DetalleComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: EstadisticaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]
