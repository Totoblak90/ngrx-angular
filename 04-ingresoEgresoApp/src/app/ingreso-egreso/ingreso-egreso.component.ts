import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { isLoading, stopLoading } from '../shared/ui.actions';
import { map } from 'rxjs';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrls: ['./ingreso-egreso.component.scss']
})
export class IngresoEgresoComponent {
  private fb = inject(FormBuilder);
  private ingresoEgresoService = inject(IngresoEgresoService);
  private store = inject(Store<AppState>);

  type: 'ingreso' | 'egreso' = 'ingreso';

  ingresoEgresoForm = this.fb.group({
    descripcion: [ '', [Validators.required] ],
    monto: [ 0, [ Validators.required, Validators.min(0) ] ],
  })

  isLoading$ = this.store.select('ui').pipe( map( ui => ui.isLoading ) );

  async save() {
    this.store.dispatch( isLoading() );

    if (this.ingresoEgresoForm.invalid) return;

    const ingresoEgresoObj = new IngresoEgreso(
      this.ingresoEgresoForm.get('descripcion')?.value || '',
      this.ingresoEgresoForm.get('monto')?.value || 0,
      this.type
    )

    await this.ingresoEgresoService.createIngresoEgreso({ ...ingresoEgresoObj });

    this.store.dispatch( stopLoading() );

    this.ingresoEgresoForm.reset();
  }

}
