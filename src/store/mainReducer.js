const defaultState = {
    user: {},
}

const USERS = "GET_USER";

export const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USERS:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export const GetUserAction = (payload) => ({type: USERS, payload})