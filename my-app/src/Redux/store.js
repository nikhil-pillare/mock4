import {applyMiddleware, legacy_createStore, combineReducers} from 'redux';

import thunk from 'redux-thunk';

import { reducer } from './reducer';

const rootReducer= combineReducers({reducer})

export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))
