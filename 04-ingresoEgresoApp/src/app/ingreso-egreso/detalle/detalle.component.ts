import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { IngresoEgresoService } from 'src/app/services/ingreso-egreso.service';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { AppStateWithIngreso } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {

  private store = inject(Store<AppStateWithIngreso>);
  private ingresoEgresoService = inject(IngresoEgresoService)

  ingresosEgresos$ = this.store.select('ingresoEgreso').pipe(map(({ items }) => items));

  get balance$() {
    return this.ingresosEgresos$.pipe(map(items => items.reduce((acc: number, item: IngresoEgreso) => item.tipo === 'ingreso' ? acc + item.monto : acc - item.monto, 0)));
  }

  deleteItem(uid: string) { this.ingresoEgresoService.deleteItem(uid); }

}
