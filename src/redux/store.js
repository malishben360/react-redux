import { legacy_createStore as createStore} from "redux";
import rootReducer from "./rootReducer";

/** Currently there is new better version(@reduxjs/toolkit) of redux for creating the redux store.
 * The createStore function has been deprecated, but legacy_createStore function is made availlable.
 */

const store = createStore(rootReducer);

export default store;