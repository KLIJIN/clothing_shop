import { combineReducers } from 'redux'
import userReducer from "./user/userReducer.js" // первый редьюсер


const rootReducer = combineReducers({
    user: userReducer //дальше могли бы быть другие редьюсеры: Card2, Card3, Card4 ...
});


export default rootReducer;