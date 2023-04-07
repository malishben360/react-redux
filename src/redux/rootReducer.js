import { combineReducers } from "redux";
import cakeReducer from './cake/CakeReducer';
import iceCreamReducer from './icecream/IceCreamReducer';
import userReducer from "./user/UserReducer";

/** Combine the all the reducer into rootReducer */
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer
});

export default rootReducer;