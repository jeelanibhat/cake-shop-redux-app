import { BUY_ICECREAM } from "./iceType";

export const buyIceCreamActionCreator = (number) =>{
    console.log("num:",number)
    return{
        type: BUY_ICECREAM,
        payload: number
    }
}

