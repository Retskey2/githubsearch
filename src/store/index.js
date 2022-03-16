import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import {mainReducer} from "./mainReducer";

const rootReducer = combineReducers({
    main: mainReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));