import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/state.interface';
import { reset } from '../contador.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent {
  contador$!: Observable<number>;

  constructor( private store: Store<AppState> ) { this.subscribeToContador(); }

  subscribeToContador() { this.contador$ = this.store.select('contador') }

  reset() { this.store.dispatch( reset() ); }

}
