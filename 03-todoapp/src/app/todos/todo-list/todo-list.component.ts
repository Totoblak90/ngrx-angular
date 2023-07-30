import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todosList$: Observable<Todo[] | null> = this.store.select('todos');
  selectedFilter$: Observable<validFilters | null> = this.store.select('filters');

  constructor(private store: Store<AppState>) { }

}
