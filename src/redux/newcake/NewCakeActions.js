import { BUY_NEWCAKE } from "./NewCakeTypes"

/** Action creators */
export const buyNewCake = (num) => {
    return {
        type: BUY_NEWCAKE,
        payload: num
    }
}