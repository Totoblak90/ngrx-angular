import { Injectable, inject } from '@angular/core';
import { Firestore, doc, setDoc, collectionChanges, query, collection } from '@angular/fire/firestore';
import { IngresoEgreso } from '../models/ingreso-egreso.model';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { setItems, unsetItems } from '../ingreso-egreso/ingreso-egreso.actions';
import { setUser } from '../auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);
  private store = inject(Store<AppState>);

  initIngresosEgresosListener() {

    const queryInstance = query( collection(this.firestore, 'users') )
    return collectionChanges(queryInstance)

  }

  async createIngresoEgreso( ingresoEgreso: IngresoEgreso ) {

    const user = this.authService.user;

    if (user) {
      try {

        const userObject = { ...user };
        const ingresoEgresoObject = { ...ingresoEgreso, uid: uuidv4() };

        userObject.ingresoEgreso = [ ...userObject.ingresoEgreso, ingresoEgresoObject ];

        this.authService.updateUser = userObject;

        await setDoc( doc( this.firestore, `users/${user.uid}` ), { ...userObject } );

        this.store.dispatch( setUser( { user: { ...userObject } } ) );
        this.store.dispatch( setItems( { items: [ ...userObject.ingresoEgreso ] } ) );

        Swal.fire({
          title: 'Registro creado',
          text: ingresoEgreso.descripcion,
          icon: 'success',
        })

      } catch (error: any) {
        this.authService.updateUser = user;
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error',
        })
      }

    }
  }

  async deleteItem(itemUid: string) {
    try {

      const user = this.authService.user ? { ...this.authService.user } : null;

      if (user) {
        const ingresoEgresoUpdated = user.ingresoEgreso.filter( item => item.uid !== itemUid );
        user.ingresoEgreso = ingresoEgresoUpdated;

        await setDoc( doc( this.firestore, `users/${this.authService.user?.uid}` ), { ...user } );

        this.store.dispatch( setUser( { user: { ...user } } ) );
        this.store.dispatch( setItems( { items: [ ...user.ingresoEgreso ] } ) );

      }

    } catch (error: any) {
      console.log(error.message)
    }
  }
}
