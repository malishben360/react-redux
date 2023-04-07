import { legacy_createStore as createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunkMiddleware from 'redux-thunk';

/** Currently there is new better version(@reduxjs/toolkit) of redux for creating the redux store.
 * The createStore function has been deprecated, but legacy_createStore function is made availlable.
 * The thunkMiddleware allows writing functions with logic inside that can interact with a 
 * Redux store's dispatch and getState methods.
 */

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default store;