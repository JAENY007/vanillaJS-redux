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
const counterReducer = (state, action) => { 
  return {
    counter: state.counter + 1
  }
}; 

/**
 * create new Store
 */
const store = redux.createStore(counterReducer);

/**
 * subscriber Function
 * getState snapshot for store
 */
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

/**
 * subscribe Function act
 */
store.subscribe(counterSubscriber);