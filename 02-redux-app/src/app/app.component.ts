import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './contador/contador.actions';
import { AppState } from './interfaces/store.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public contador!: number;

  constructor(private store: Store<AppState>) {
    this.store.select('contador').subscribe({
      next: (contador) => (this.contador = contador),
    });
  }

  public incrementar(): void {
    this.store.dispatch(actions.incrementar());
  }

  public decrementar(): void {
    this.store.dispatch(actions.decrementar());
  }
}
