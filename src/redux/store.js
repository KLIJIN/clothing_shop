import { createStore, applyMiddleware } from 'redux';  //<-- шаг 0, импортируем  {createStore}  из редакса
import logger from "redux-logger";

import rootReducer from "./rootReducer.js";


const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))


const currentState = store.getState()
console.log(currentState)  // выведет состояние стора.

export default store; 