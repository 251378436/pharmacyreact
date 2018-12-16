import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';

import defaultReducer from '@/Redux/reducers/defaultReducer';

export default createStore(
    combineReducers({defaultReducer}),
    {}, 
    applyMiddleware(logger, thunk, promise())
);
