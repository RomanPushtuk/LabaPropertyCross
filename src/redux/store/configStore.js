import { createStore } from 'redux';
import rootReducer from '../reducers/index';
import { devToolsEnhancer } from 'redux-devtools-extension';

const preloadedState = {};

const store = createStore(rootReducer, preloadedState, devToolsEnhancer());

export default store;
