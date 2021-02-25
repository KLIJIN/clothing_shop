import { combineReducers } from 'redux'
import userReducer from "./user/userReducer.js" // первый редьюсер
import cartReducer from "./cart/cartReducer.js" // второй редьюсер
import directoryReducer from "./directrory/directoryReducer.js"
import shopReducer from "./shop/shopReducer.js"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" //local storage

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cartR"]
}

const rootReducer = combineReducers({
    userR: userReducer,
    cartR: cartReducer,
    directoryR: directoryReducer,
    shopR: shopReducer,

});


// export default rootReducer;

export default persistReducer(persistConfig, rootReducer);

