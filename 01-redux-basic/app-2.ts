// Creando redux desde cero
import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction } from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reducer";
import { Reducer } from "./ngrx-fake/ngrx";

class Store<T> {
    constructor(private reducer: Reducer<T>, private state: T) {}
    
    getState() {
        console.log(this.state)
        return this.state;
    }
    
    dispatch(action: any) {
        this.state = this.reducer(this.state, action);
    }
}

const store = new Store(contadorReducer, 10);


store.getState();

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.getState();

store.dispatch(decrementadorAction);
store.dispatch(decrementadorAction);
store.getState();

store.dispatch(multiplicarAction);
store.dispatch(multiplicarAction);
store.getState();

store.dispatch(dividirAction);
store.getState();
