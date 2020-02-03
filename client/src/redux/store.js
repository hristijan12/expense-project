import { createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {registerReducer} from './ducks/register';
import {addProductReducer} from './ducks/products';
import {getProductsReducer} from '../redux/ducks/getproducts';
import {loginReducer} from './ducks/login';
import {applyMiddleware} from 'redux'
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
    registerReducer,
     loginReducer,   
    addProductReducer,
    getProductsReducer
    
})

const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
);

export default store