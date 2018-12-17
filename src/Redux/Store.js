import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';

import reducer from '@/Redux/reducers/defaultReducer';

export default createStore(
    combineReducers({reducer}),
    {}, 
    applyMiddleware(logger, thunk, promise())
);
