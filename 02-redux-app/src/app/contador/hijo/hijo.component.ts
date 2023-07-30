import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/state.interface';
import { dividir, multiplicar } from '../contador.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  contador$!: Observable<number>;

  constructor( private store: Store<AppState> ) { this.subscribeToContador(); }

  subscribeToContador() { this.contador$ = this.store.select('contador') }

  multiplicar() { this.store.dispatch(multiplicar({ numero: 2 })) }

  dividir() { this.store.dispatch(dividir({ numero: 2 })) }

}
