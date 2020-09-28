import {combineReducers, createStore} from 'redux';
import homeReducer from './home-reducer';

let reducers = combineReducers({
  homePage: homeReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
