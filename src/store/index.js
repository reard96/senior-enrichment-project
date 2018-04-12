import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import students from './students';
import campuses from './campuses';

const reducer = combineReducers({
  students,
  campuses
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

// Export action creators
export * from './students';
export * from './campuses';
