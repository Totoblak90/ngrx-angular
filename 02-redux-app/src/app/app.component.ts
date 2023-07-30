import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as contadorActions from './contador/contador.action';
import { AppState } from './interfaces/state.interface';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador$!: Observable<number>;

  constructor( private store: Store<AppState> ) { this.subscribeToContador(); }

  subscribeToContador() { this.contador$ = this.store.select('contador') }

  incrementar() { this.store.dispatch( contadorActions.increment() ) }

  decrementar() { this.store.dispatch( contadorActions.decrementar() ) }
}
