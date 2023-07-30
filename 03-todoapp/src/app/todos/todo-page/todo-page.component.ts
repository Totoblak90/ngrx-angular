import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {

  toggleCompleted = false;

  constructor (private store: Store<AppState>) {}

  toggleAll() {
    this.toggleCompleted = !this.toggleCompleted;

    this.store.dispatch( toggleAll( { completed: this.toggleCompleted } ) );
  }

}
