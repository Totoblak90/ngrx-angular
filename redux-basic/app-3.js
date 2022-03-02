"use strict";
exports.__esModule = true;
var contador_actions_1 = require("./contador/contador.actions");
var contador_reducer_1 = require("./contador/contador.reducer");
var STORE = /** @class */ (function () {
    function STORE(state, reducer) {
        this.state = state;
        this.reducer = reducer;
    }
    STORE.prototype.getState = function () {
        return this.state;
    };
    STORE.prototype.dispatch = function (action) {
        this.state = this.reducer(this.state, contador_actions_1.incrementarAction);
    };
    return STORE;
}());
var contadorStore = new STORE(10, contador_reducer_1.contadorReducer);
console.log(contadorStore.getState());
contadorStore.dispatch(contador_actions_1.incrementarAction);
contadorStore.dispatch(contador_actions_1.incrementarAction);
contadorStore.dispatch(contador_actions_1.incrementarAction);
contadorStore.dispatch(contador_actions_1.incrementarAction);
contadorStore.dispatch(contador_actions_1.decrementarAction);
contadorStore.dispatch(contador_actions_1.decrementarAction);
contadorStore.dispatch(contador_actions_1.incrementarMasAction);
contadorStore.dispatch(contador_actions_1.incrementarMasAction);
contadorStore.dispatch(contador_actions_1.incrementarMasAction);
contadorStore.dispatch(contador_actions_1.incrementarMasAction);
contadorStore.dispatch(contador_actions_1.incrementarMasAction);
contadorStore.dispatch(contador_actions_1.incrementarMasAction);
contadorStore.dispatch(contador_actions_1.decrementarMasAction);
contadorStore.dispatch(contador_actions_1.decrementarMasAction);
contadorStore.dispatch(contador_actions_1.decrementarMasAction);
console.log(contadorStore.getState());
