import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../interfaces/store.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent {
  contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe({
      next: (contador) => (this.contador = contador),
    });
  }

  public multiplicar(): void {
    this.store.dispatch(actions.multiplicar());
  }

  public dividir(): void {
    this.store.dispatch(actions.dividir());
  }
}
