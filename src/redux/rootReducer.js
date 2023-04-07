import { combineReducers } from "redux";
import cakeReducer from './cake/CakeReducer';
import newCakeReducer from "./newcake/NewCakeReducer";
import iceCreamReducer from './icecream/IceCreamReducer';

/** Combine the all the reducer into rootReducer */
const rootReducer = combineReducers({
    cake: cakeReducer,
    newcake: newCakeReducer,
    icecream: iceCreamReducer
});

export default rootReducer;