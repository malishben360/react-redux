import { combineReducers } from "redux";
import cakeReducer from './cake/CakeReducer';
import iceCreamReducer from './icecream/IceCreamReducer';

/** Combine the all the reducer into rootReducer */
const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
});

export default rootReducer;