import { createStore } from 'redux'
import thunk from 'redux-thunk'
import {registerReducer} from './ducks/register';
import {addProductReducer} from './ducks/products';
import {loginReducer} from './ducks/login';
import {applyMiddleware} from 'redux'
import {logger} from 'redux-logger'


const store = createStore(
    (registerReducer,
     loginReducer,   
    addProductReducer),
    applyMiddleware(logger, thunk)
);

export default store