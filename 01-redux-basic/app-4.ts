import { createStore, Store } from "redux";
import { contadorReducer } from "./contador/contador.reducer";
import { incrementarAction } from "./contador/contador.actions";

const store: Store = createStore(contadorReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementarAction);
