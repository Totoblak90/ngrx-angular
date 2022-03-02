import { Action } from "../ngrx-fake/ngrx";

export const incrementarAction: Action = {
  type: "INCREMENTAR",
};

export const incrementarMasAction: Action = {
  type: "INCREMENTAR_MAS",
  payload: 5,
};

export const decrementarAction: Action = {
  type: "DECREMENTAR",
};

export const decrementarMasAction: Action = {
  type: "DECREMENTAR_MAS",
  payload: 5,
};

export const resetAction: Action = {
  type: "RESET",
  payload: 5,
};
