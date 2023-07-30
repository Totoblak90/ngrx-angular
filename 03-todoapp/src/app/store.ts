import { ActionReducerMap } from "@ngrx/store"
import { filterReducer } from "./filter/filter.reducer"
import { todoReducer } from "./todos/todo.reducer"
import { AppState } from "./app.state"

export const AppStore: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer
}
