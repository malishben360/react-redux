import { BUY_CAKE } from "./CakeTypes"

/** Action creators */
export const buyCake = (num = 1) => {
    return {
        type: BUY_CAKE,
        payload: num
    }
}