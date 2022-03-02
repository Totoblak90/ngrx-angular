"use strict";
exports.__esModule = true;
var contador_actions_1 = require("./contador/contador.actions");
var state = 10;
function reducer(st, action) {
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
console.log(reducer(10, contador_actions_1.incrementarAction));
console.log(reducer(10, contador_actions_1.decrementarAction));
console.log(reducer(10, contador_actions_1.incrementarMasAction));
console.log(reducer(10, contador_actions_1.decrementarMasAction));
console.log(reducer(10, contador_actions_1.resetAction));
