import { BUY_ICECREAM } from './iceType';

const initialState = {
    numOficeCreams: 22
}

const iceCreamReducer = ( state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            if( state.numOficeCreams > 0 && (state.numOficeCreams - action.payload) > 0 ){
                return{
                    ...state,
                    numOficeCreams : state.numOficeCreams - action.payload
                }
            }else{
                return{
                    ...state
                }
            }
        default:
            return state
    }
}

export default iceCreamReducer;
