import { BUY_NEWCAKE } from "./NewCakeTypes";

/** New cake initial state */
const initialState = {
    numOfNewCakes: 25
}

/** New cake reducer */
const newCakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_NEWCAKE:
            const numOfNewCakes = state.numOfNewCakes - parseInt(action.payload);
            return {
                ...state,
                numOfNewCakes: numOfNewCakes
            }

        default: return state;
    }
}

export default newCakeReducer;
