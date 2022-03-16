import {GetUserAction} from "../store/mainReducer";

export const fetchUser = user => {
    return dispatch => {
        fetch(`https://api.github.com/users/${user}`)
            .then(response => response.json())
            .then(json => dispatch(GetUserAction(json)))
    }
}