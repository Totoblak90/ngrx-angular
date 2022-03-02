import { Action } from "./ngrx-fake/ngrx";
import {
  decrementarAction,
  decrementarMasAction,
  incrementarAction,
  incrementarMasAction,
  resetAction,
} from "./contador/contador.actions";
var state = 10;

function reducer(st: number, action: Action): any {
  switch (action.type) {
    case "INCREMENTAR":
      return state + 1;
    case "DECREMENTAR":
      return state - 1;
    case "INCREMENTAR_MAS":
      return state + action.payload;
    case "DECREMENTAR_MAS":
      return state - action.payload;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}

console.log(reducer(10, incrementarAction));
console.log(reducer(10, decrementarAction));
console.log(reducer(10, incrementarMasAction));
console.log(reducer(10, decrementarMasAction));
console.log(reducer(10, resetAction));
