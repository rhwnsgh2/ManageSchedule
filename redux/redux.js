import {combineReducers, createStore, Reducer, Store} from 'redux';

const rootReducer = combineReducers({
  work: workReducer,
  marking: markingReducer,
});

const store = createStore(rootReducer);

export default store;
