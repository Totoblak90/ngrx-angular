import { Action, Reducer } from "./ngrx-fake/ngrx";
import {
  incrementarAction,
  decrementarAction,
  incrementarMasAction,
  decrementarMasAction,
} from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";

class STORE<T> {
  constructor(private state: T, private reducer: Reducer<T>) {}

  public getState(): T {
    return this.state;
  }

  public dispatch(action: Action): void {
    this.state = this.reducer(this.state, incrementarAction);
  }
}

const contadorStore = new STORE(10, contadorReducer);

console.log(contadorStore.getState());

contadorStore.dispatch(incrementarAction);
contadorStore.dispatch(incrementarAction);
contadorStore.dispatch(incrementarAction);
contadorStore.dispatch(incrementarAction);
contadorStore.dispatch(decrementarAction);
contadorStore.dispatch(decrementarAction);
contadorStore.dispatch(incrementarMasAction);
contadorStore.dispatch(incrementarMasAction);
contadorStore.dispatch(incrementarMasAction);
contadorStore.dispatch(incrementarMasAction);
contadorStore.dispatch(incrementarMasAction);
contadorStore.dispatch(incrementarMasAction);
contadorStore.dispatch(decrementarMasAction);
contadorStore.dispatch(decrementarMasAction);
contadorStore.dispatch(decrementarMasAction);

console.log(contadorStore.getState());
