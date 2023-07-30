// Usando Redux
import { Store, createStore } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import {
  decrementadorAction,
  dividirAction,
  incrementadorAction,
  multiplicarAction,
} from "./contador/contador.actions";

const store: Store<number> = createStore(contadorReducer)

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(decrementadorAction);
store.dispatch(decrementadorAction);
store.dispatch(multiplicarAction);
store.dispatch(multiplicarAction);
store.dispatch(multiplicarAction);
store.dispatch(dividirAction);
store.dispatch(dividirAction);
