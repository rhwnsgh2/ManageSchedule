import {combineReducers, createStore, Reducer, Store} from 'redux';
import {markingReducer} from './markingReducer';
import {workReducer} from './workReducer';

const rootReducer = combineReducers({
  work: workReducer,
  marking: markingReducer,
});

const store = createStore(rootReducer);

export default store;
