const defaultState = {
    isLoading: false,
    user: {},
}

const USERS = "GET_USER";
const LOADING = "GET_LOADING";

export const mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, isLoading: action.payload}
        case USERS:
            return {...state, user: action.payload}
        default:
            return state;
    }
}

export const GetLoadingAction = (payload) => ({type: LOADING, payload})
export const GetUserAction = (payload) => ({type: USERS, payload})