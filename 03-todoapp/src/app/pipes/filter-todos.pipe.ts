import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todos/models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[] | null, filter: validFilters | null): Todo[] {

    return todos!.filter( todo => {
      switch (filter) {
        case 'completed':
          return todo.completed;
        case 'active':
          return !todo.completed;
        default:
          return true;
      }
    }) || [];

  }

}
