import {chatReducer} from "./chat-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

const reducer = combineReducers({
    chat:chatReducer
})

export type AppRootStateType = ReturnType<typeof reducer>

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));