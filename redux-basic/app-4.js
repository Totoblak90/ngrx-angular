"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var contador_reducer_1 = require("./contador/contador.reducer");
var contador_actions_1 = require("./contador/contador.actions");
var store = (0, redux_1.createStore)(contador_reducer_1.contadorReducer);
store.subscribe(function () { return console.log(store.getState()); });
store.dispatch(contador_actions_1.incrementarAction);
