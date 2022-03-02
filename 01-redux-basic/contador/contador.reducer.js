"use strict";
exports.__esModule = true;
exports.contadorReducer = void 0;
function contadorReducer(st, action) {
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
exports.contadorReducer = contadorReducer;
