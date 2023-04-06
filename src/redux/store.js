import { legacy_createStore as createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";


/** Currently there is new better version(@reduxjs/toolkit) of redux for creating the redux store.
 * The createStore function has been deprecated, but legacy_createStore function is made availlable.
 */

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;