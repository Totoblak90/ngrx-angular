import { createReducer, on } from '@ngrx/store';
import {
  decrementar,
  dividir,
  increment,
  multiplicar,
  reset,
} from './contador.action';

const initialState = 10;

export const contadorReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
  on(reset, (_) => 10)
);
