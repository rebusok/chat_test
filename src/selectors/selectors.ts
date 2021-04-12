import {AppRootStateType} from "../store/store";

export const selectChangeName = (state: AppRootStateType) => state.chat.changeName
export const selectInitUser = (state: AppRootStateType) => state.chat.initUser