import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { createTodo } from './todos.actions';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { text }) => [...state, new Todo(text)])
);
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
