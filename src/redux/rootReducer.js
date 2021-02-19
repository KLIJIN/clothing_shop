import { combineReducers } from 'redux'
import userReducer from "./user/userReducer.js" // первый редьюсер
import cartReducer from "./cart/cartReducer.js" // второй редьюсер

const rootReducer = combineReducers({
    userR: userReducer,
    cartR: cartReducer,
});


export default rootReducer;