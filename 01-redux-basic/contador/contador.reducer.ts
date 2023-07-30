import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer(state = 10, action: Action) {
    const posibleActions: { [key: string]: Function } = {
      INCREMENTAR: () => (state += 1),
      DECREMENTAR: () => (state -= 1),
      MULTIPLICAR: () => (state * action.payload) as number,
      DIVIDIR: () => (state / action.payload) as number,
      RESET: () => (state = 0),
    };
  
    // console.log(
    //   posibleActions[action.type] ? posibleActions[action.type]() : state
    // );
  
    return posibleActions[action.type] ? posibleActions[action.type]() : state;
  }