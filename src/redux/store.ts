import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { combineReducer } from './reducers';

export type IAppState = ReturnType<typeof combineReducer>;

export default createStore(combineReducer, applyMiddleware(thunk));
