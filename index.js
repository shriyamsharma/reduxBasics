const redux = require('redux');
const createStore = redux.createStore;
const combinedReducers = redux.combineReducers;

//make a string action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//action creator i.e. A function that return action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux application'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux application'
    }
}

//reducer

//state ofthe app
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream: 20
// }

const cakeInitialState = {
    numOfCakes: 10

}

const IceCreamInitialState = {
    numOfIceCream: 20
}

//reducer function 

//single reducer
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes-1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCream: state.numOfIceCream-1
//         }
//         default: return state
//     }
// }

// multiple reducer 
const cakeReducer = (state = cakeInitialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

const iceCreamReducer = (state = IceCreamInitialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream-1
        }
        default: return state
    }
}

//combined reducer for combining both reducer 
//Note: combine all the reducers before making store

const reducers = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

//hoding the application state
const store = createStore(reducers);

//allow access to state via getStore()
console.log('Initial State', store.getState());

//subscribe
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));
// console.log(state.cake.numOfCakes)

//allow state to be updated via dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());



//unsubscribe() 
unsubscribe();