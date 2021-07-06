import React, {useEffect, useRef, useState} from 'react';
import style from './ChatLog.module.scss'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import TextInput from '../TextInput/TextInput';
import {selectChangeName, selectInitUser} from "../../selectors/selectors";
import {Redirect} from "react-router-dom";
const ChatLog = () => {
    const [isAutoScrollActive, setIsAutoScrollActive] = useState<boolean>(true)
    const [lastScrollTop, setLastScrollTop] = useState<number>(0)
    const messages = useSelector((state: AppRootStateType) => state.chat.messages)
    const typengUseers = useSelector((state: AppRootStateType) => state.chat.typingUsers)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const changeName = useSelector(selectChangeName)
    const initUser = useSelector(selectInitUser)

    function scrollHandler(event: React.UIEvent<HTMLDivElement, UIEvent>) {
        const maxScrollPosition = event.currentTarget.scrollHeight - event.currentTarget.clientHeight
        const absPosition = Math.abs(maxScrollPosition - event.currentTarget.scrollTop)
        if (event.currentTarget.scrollTop > lastScrollTop && absPosition < 10) {
            setIsAutoScrollActive(true)
        } else {
            setIsAutoScrollActive(false)
        }
        setLastScrollTop(event.currentTarget.scrollTop)
    }
    useEffect(() => {
        if (isAutoScrollActive) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages, isAutoScrollActive])
    if (!changeName) return <Redirect to={'/'}/>
    return (
        <div className={style.chatMain}>
            <div className={style.container}>
                <div className={style.windowChat} onScroll={event => scrollHandler(event)}>
                    {messages.map(m => {
                        return (
                            <div key={m.id} className={m.user.id === initUser?.id ? style['left'] : style['right']}>
                                <b>{m.user.name} : </b> {m.message}
                            </div>
                        )
                    })}
                    {typengUseers.map(m => {
                        return (
                            <div key={m.id}>
                                <b>{m.name} : </b> <span className={style.typeng}>... печатает</span>
                                <hr/>
                            </div>
                        )
                    })}
                    <div ref={messagesAnchorRef}/>

                </div>
                <TextInput/>
            </div>

        </div>
    );
};

export default ChatLog;