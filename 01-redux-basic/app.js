var state = 10;
var incrementarAction = {
    type: "INCREMENTAR"
};
var incrementarMasAction = {
    type: "INCREMENTAR_MAS",
    payload: 5
};
var decrementarAction = {
    type: "DECREMENTAR"
};
var decrementarMasAction = {
    type: "DECREMENTAR_MAS",
    payload: 5
};
// Reducer: A reducer is a fuction that recieves an old state and an action and returns the new state. IT DOESN'T MODIFY THE STATE DIRECTLY.
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
        default:
            return state;
    }
}
console.log(reducer(10, incrementarAction));
console.log(reducer(10, decrementarAction));
console.log(reducer(10, incrementarMasAction));
console.log(reducer(10, decrementarMasAction));
