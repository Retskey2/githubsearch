import {GetLoadingAction, GetUserAction} from "../store/mainReducer";
import axios from "axios";

export const fetchUser = user => {
    return dispatch => {
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {dispatch(GetUserAction(response.data))})
            .catch(error => console.log(error))
            .finally(() => dispatch(GetLoadingAction(false)));
    }
}