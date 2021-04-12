import io from "socket.io-client";
import {messageType, UserType} from "../store/chat-reducer";


// const socket = io('http://localhost:3009/')
const socket = io('https://chat-back-test.herokuapp.com/')


export const api = {
    socket: null as null | SocketIOClient.Socket,
    createConnection() {
        this.socket = socket
    },
    subscribe(
        initMessageHandler: (messages: messageType[]) => void,
        newMessageHandler: (message: messageType) => void,
        userTypingHandler: (user: UserType) => void,
        initUser: (message: UserType) => void) {
        this.socket?.on('messages-init', initMessageHandler)
        this.socket?.on('new-message-sent', newMessageHandler)
        this.socket?.on('user-typing', userTypingHandler)
        this.socket?.on('set_user', initUser)
    },
    destroyConnection() {
        this.socket?.disconnect()
        this.socket = null
    },
    sentName(name: string) {
        this.socket?.emit('client-name-sent', name)
    },
    sentMessage(message: string) {
        this.socket?.emit('client-message-sent', message)
    },
    typeMessage() {
        this.socket?.emit('client-typed')
    },

}