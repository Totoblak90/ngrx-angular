import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer(st: number, action: Action): any {
  switch (action.type) {
    case "INCREMENTAR":
      return st + 1;
    case "DECREMENTAR":
      return st - 1;
    case "INCREMENTAR_MAS":
      return st + action.payload;
    case "DECREMENTAR_MAS":
      return st - action.payload;
    case "RESET":
      return (st = 0);
    default:
      return st;
  }
}
