import {Dispatch} from "redux";
import {api} from "../Api/Api";

export interface stateProps {
    messages: messageType[]
    typingUsers: UserType[]
    changeName:boolean
    initUser: null | UserType
}

export interface messageType {
    message: string
    id: string
    user: UserType
}
export interface UserType {
    id: string
    name: string
}

const initialState: stateProps = {
    messages: [] as Array<messageType>,
    typingUsers: [] as Array<UserType>,
    changeName: false,
    initUser: null
}

//Type
export enum ActionType {
    MESSAGES_RECEIVED = 'MESSAGES_RECEIVED',
    NEW_MESSAGE = "NEW_MESSAGE",
    ADD_TYPING_USER = "ADD_TYPING_USER",
    APP_CHANGE_NAME = "APP_CHANGE_NAME",
    APP_INIT_USER = "APP_INIT_USER",

}

export const chatReducer = (state: stateProps = initialState, action: chatType): stateProps => {
    switch (action.type) {
        case ActionType.MESSAGES_RECEIVED: {
            return {...state, ...action.messages}
        }
        case ActionType.NEW_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages, action.message
                ],
                typingUsers: state.typingUsers.filter(u => u.id !== action.message.user.id)

            }
        }
        case ActionType.ADD_TYPING_USER:
            return {
                ...state, typingUsers:[...state.typingUsers.filter(u => u.id !== action.user.id), action.user]
            }
        case ActionType.APP_CHANGE_NAME: {
            return {
                ...state, changeName:action.changeName
            }
        }
        case ActionType.APP_INIT_USER:
            return {
                ...state, initUser: action.user
            }
        default:
            return state
    }
}

const messagesReceived = (messages: messageType[]) => ({type: ActionType.MESSAGES_RECEIVED, messages}as const)
const changeName = (changeName: boolean) => ({type: ActionType.APP_CHANGE_NAME, changeName}as const)

const newMessages = (message: messageType) => ({
    type: ActionType.NEW_MESSAGE,
    message
}as const)
const typingUserAdded = (user: UserType) => ({type:ActionType.ADD_TYPING_USER, user} as const)
const initUserAdded = (user: UserType) => ({type:ActionType.APP_INIT_USER, user} as const)
type chatType = ReturnType<typeof messagesReceived> | ReturnType<typeof newMessages> |
    ReturnType<typeof typingUserAdded>|
    ReturnType<typeof initUserAdded>|
    ReturnType<typeof changeName>
export const createConnection = () => (dispatch: Dispatch) => {
    api.createConnection()
    api.subscribe(
        messages => {
            dispatch(messagesReceived(messages))
        }, message => {
            dispatch(newMessages(message))
        }, user => {
          dispatch(typingUserAdded(user))
        },
        user => {
            dispatch(initUserAdded(user))
        }
    )
}
export const destroyConnection = () => (dispatch: Dispatch) => {
    api.destroyConnection()
    dispatch(changeName(false))
}
export const setClientName = (name:string) => (dispatch: Dispatch) => {
   api.sentName(name)
    dispatch(changeName(true))
}
export const setClientMessage = (message:string) => (dispatch: Dispatch) => {
    api.sentMessage(message)
}
export const typeMessage = () => (dispatch:Dispatch) => {
    api.typeMessage()
}
