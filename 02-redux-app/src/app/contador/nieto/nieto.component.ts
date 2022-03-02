import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/store.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss'],
})
export class NietoComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe({
      next: (contador) => (this.contador = contador),
    });
  }

  public reset(): void {
    this.store.dispatch(actions.reset());
  }
}
