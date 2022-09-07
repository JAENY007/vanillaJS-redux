/**
 * import redux
 */
const redux = require('redux'); 

/**
 * reducer Function
 * @param {*} state 
 * @param {Funtion} action 
 * @returns {state}
 */
const counterReducer = (state = { counter: 0 }, action) => { 
  return {
    counter: state.counter + 1
  }
}; 

/**
 * create new Store
 */
const store = redux.createStore(counterReducer);

// Check DefaultState
console.log(store.getState());

/**
 * subscriber Function
 * getState snapshot for store
 */
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

/**
 * subscribe Function execute
 */
store.subscribe(counterSubscriber);

/**
 * dispatch Function execute
 */
store.dispatch({ type: 'increment' });