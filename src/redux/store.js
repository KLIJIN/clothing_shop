import { createStore, applyMiddleware } from 'redux';  //<-- шаг 0, импортируем  {createStore}  из редакса
import logger from "redux-logger";

import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer.js";

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store)

// const currentState = store.getState()
// console.log(currentState)  // выведет состояние стора.

export default { store, persistor }; 