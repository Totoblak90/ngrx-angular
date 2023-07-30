import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable, map } from 'rxjs';
import { setFilter, validFilters } from 'src/app/filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent {

  selectedFilter$: Observable<validFilters> = this.store.select('filters');

  unfinishedTasks$: Observable<number> = this.store.select('todos').pipe(
    map( todos => todos.filter( todo => !todo.completed ).length )
  )

  filters: validFilters[] = ['all', 'completed', 'active'];

  constructor( private store: Store<AppState> ) {}

  selectFilter(type: validFilters) {
    this.store.dispatch( setFilter( { filter: type } ) )
  }

  clearCompleted() { this.store.dispatch( clearCompleted() ) }

}
