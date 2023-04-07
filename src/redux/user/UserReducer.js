import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './UserTypes';

/** User module initial state before any state transitions */
const initialState = {
    isLoading: false,
    users: [],
    error: ''
}

/** User reducers */
const userReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                isLoading: false,
                users: action.payload,
                error: ''
            }
        
        case FETCH_USERS_FAILURE:
            return {
                isLoading: false,
                users: [],
                error: action.payload
            }

        default: return state;
    }
}

export default userReducer;