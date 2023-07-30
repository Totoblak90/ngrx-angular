import { createReducer, on } from "@ngrx/store";
import { clearCompleted, createTodo, deleteTodo, editTodo, toggleAll, toggleTodo } from "./todo.actions";
import { Todo } from "./models/todo.model";
import { validFilters } from "../filter/filter.actions";

export const initialState: Todo[] = [ new Todo('Save the world') ];

export const todoReducer = createReducer(
  initialState,
  on( createTodo,     ( state, { text } )      => [ ...state, new Todo (text) ] ),
  on( toggleTodo,     ( state, { id } )        => state.map( todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ) ),
  on( toggleAll,      ( state, { completed } ) => state.map( todo => ( { ...todo, completed } ) ) ),
  on( editTodo,       ( state, { id, text } )  => state.map( todo => todo.id === id ? { ...todo, text } : todo ) ),
  on( deleteTodo,     ( state, { id } )        => state.filter( todo => todo.id !== id ) ),
  on( clearCompleted, ( state )                => state.filter( todo => !todo.completed ) ),
);
