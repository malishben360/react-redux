import { BUY_ICECREAM } from "./IceCreamTypes";

/** Initial state of the icecream store before any state transition
 * trigger by react components.
 */
const initialState = {
    numOfIceCreams: 20
}

/** The reducer takes in the initial state and action */
const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state;
    }
}

export default iceCreamReducer;