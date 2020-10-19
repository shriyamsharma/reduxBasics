const redux = require('redux');
const createStore = redux.createStore;

//make a string action
const BUY_CAKE = 'BUY_CAKE';

//action creator i.e. A function that return action
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux application'
    }
}

//reducer

//state ofthe app
const initialState = {
    numOfCakes: 10
}

//reducer function 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

//hoding the application state
const store = createStore(reducer);

//allow access to state via getStore()
console.log('Initial State', store.getState());

//subscribe
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

//allow state to be updated via dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

//unsubscribe() 
unsubscribe();