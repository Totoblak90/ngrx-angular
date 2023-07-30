import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map } from 'rxjs';

// Firebase
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, authState } from '@angular/fire/auth';

// Ngrx
import { AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { isLoading, stopLoading } from '../shared/ui.actions';
import { setUser, unsetUser } from '../auth/auth.actions';

// Extras
import Swal from 'sweetalert2';
import { Usuario } from '../models/user.model';
import { setItems, unsetItems } from '../ingreso-egreso/ingreso-egreso.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = inject(Auth);
  router = inject(Router);
  firestore = inject(Firestore);
  store = inject(Store<AppState>);

  private _userBS = new BehaviorSubject<Usuario | null>(null);

  get user() {
    return this._userBS.value;
  }

  set updateUser( user: Usuario ) {
    this._userBS.next(user);
  }

  private fireLoading() {
    Swal.fire({
      title: 'Cargando, espera por favor...',
      didOpen: () => Swal.showLoading()
    })
  }

  initAuthListener() {

    authState(this.auth).subscribe(async user => {
      const docRef = doc(this.firestore, `users/${user?.uid}`)
      const userDocument = (await getDoc(docRef)).data() as Usuario | undefined;

      if (userDocument)
      {
        const usuario = new Usuario(userDocument.uid, userDocument.nombre || '', userDocument.email!, userDocument.ingresoEgreso || [])

        this._userBS.next(usuario);

        this.store.dispatch( unsetItems() )
        this.store.dispatch( setUser( { user: { ...usuario } } ) )
        this.store.dispatch( setItems( { items: [ ...usuario.ingresoEgreso ] || [] } ) )
      }

      else {
        this._userBS.next(null);
        this.store.dispatch( unsetUser() );
        this.store.dispatch( unsetItems() )
      }
    })

  }

  isAuth() {
    return authState(this.auth).pipe(map( fbUser => fbUser != null) )
  }

  async createUser( nombre: string, email: string, password: string) {
    this.store.dispatch(isLoading());

    try {

      const userCredentials = await createUserWithEmailAndPassword(this.auth, email, password);
      await updateProfile(userCredentials.user, { displayName: nombre });

      const newUser = new Usuario( userCredentials.user.uid, nombre, userCredentials.user.email!, []  );
      await setDoc(doc(this.firestore, 'users', newUser.uid), { ...newUser });

      this.store.dispatch(stopLoading());

      this.router.navigate(['/']);

    } catch (error: any) {
      console.log(error)
      this.store.dispatch(stopLoading());
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    }

  }

  async loginUser(email: string, password: string) {
    this.store.dispatch(isLoading());

    try {

      await signInWithEmailAndPassword(this.auth, email, password);
      this.store.dispatch(stopLoading());
      this.router.navigate(['/']);

    } catch (error: any) {
      console.log(error)
      this.store.dispatch(stopLoading());
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    }

  }

  async logout() {
    try {

      this.fireLoading();
      await this.auth.signOut();
      Swal.close();
      this.router.navigate(['/login']);

    } catch (error: any) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      })
    }

  }

}
