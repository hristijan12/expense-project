import { createStore } from 'redux'
import thunk from 'redux-thunk'
import {registerReducer} from './ducks/register';

const store = createStore(
    registerReducer,
    applyMiddleware(logger, thunk)
);

export default store