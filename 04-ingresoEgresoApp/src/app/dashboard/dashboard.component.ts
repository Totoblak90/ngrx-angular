import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { IngresoEgresoService } from '../services/ingreso-egreso.service';
import { AuthService } from '../services/auth.service';
import { Usuario } from '../models/user.model';
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { setUser } from '../auth/auth.actions';
import { setItems, unsetItems } from '../ingreso-egreso/ingreso-egreso.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private ingresoEgresoService = inject(IngresoEgresoService)
  private authService = inject(AuthService)
  private store = inject(Store<AppState>)

  private _destroy$ = new Subject<boolean>();

  ngOnInit(): void {

    this.ingresoEgresoService.initIngresosEgresosListener().pipe(takeUntil(this._destroy$)).subscribe({
      next: (changeList) => {

        changeList.forEach(change => {
          if (change && change.type === 'modified' && change.doc.data()['uid'] === this.authService.user?.uid ) {
            const user = change.doc.data() as Usuario;
            const updatedIngresosEgresos = user.ingresoEgreso;

            this.store.dispatch( unsetItems() );
            this.store.dispatch( setUser( { user: { ...user } } ) )
            this.store.dispatch( setItems( { items: [ ...updatedIngresosEgresos] } ) )

            this.authService.updateUser = user;

          }
        })
      },
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
