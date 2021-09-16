
import { shopListReducer } from './../Reducer/Reducer';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialState ={}


const reducer = combineReducers({


    shopList: shopListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk,logger)))