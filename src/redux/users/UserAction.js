import axios from "axios"
import { FETCH_USER_REQUEST } from "./UserType"
import { FETCH_USER_SUCCESS } from "./UserType"
import { FETCH_USER_FAILUER } from "./UserType"

export const userRequestActionCreator = () =>{
    return{
        type: FETCH_USER_REQUEST
    }
}

export const userSuccessActionCreator = (users) =>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const userFailureActionCreator = () =>{
    return{
        type: FETCH_USER_FAILUER
    }
}

export const fetchData = () =>{
    return (dispatch) => {
        dispatch(userRequestActionCreator)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then( response => {
            const users = response.data;
            dispatch(userSuccessActionCreator(users))
        })
        .catch( error => {
            console.log("Error:", error.message)
            dispatch(userFailureActionCreator(error))
        }) 
    }
}