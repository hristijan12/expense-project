import { createStore } from 'redux'
import thunk from 'redux-thunk'
import {registerReducer} from './ducks/register';
import {applyMiddleware} from 'redux'
import {logger} from 'redux-logger'

const store = createStore(
    registerReducer,
    applyMiddleware(logger, thunk)
);

export default store