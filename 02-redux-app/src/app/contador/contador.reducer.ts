import { Action, createReducer, on } from '@ngrx/store';
import {
  decrementar,
  dividir,
  incrementar,
  multiplicar,
  reset,
} from './contador.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(dividir, (state) => state / 2),
  on(multiplicar, (state) => state * 2),
  on(reset, (state) => 0)
);

export function contadorReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
