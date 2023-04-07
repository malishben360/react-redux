import axios from 'axios';
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './UserTypes';

/** User action creators */
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

/** Thunk middleware permits us to write a dirty action creator.
 * This will make the API call to the domy API end point using
 * the axios library.
*/
export const fetchUsers = () => {
    return async (dispatch) => {
        try{
            dispatch(fetchUsersRequest());
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        } catch(error){
            const errorMsg = error.message;
            dispatch(fetchUsersFailure(errorMsg));
        }
    }
}
