import { createReducer, on } from "@ngrx/store";
import { setFilter, validFilters } from './filter.actions';

export const initialState: validFilters = 'all';

export const filterReducer = createReducer(
  initialState as validFilters,
  on( setFilter, ( state, { filter } ) => filter )
)
