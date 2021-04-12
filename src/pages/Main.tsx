import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {setClientName} from "../store/chat-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {selectChangeName} from '../selectors/selectors';
import style from './Main.module.scss'
const Main: FC = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [errorName, setErrorName] = useState<boolean>(false)
    const [errorNameStr, setErrorNameStr] = useState<string | null>(null)
    const [dissable, setDissable] = useState<boolean>(false)
    const changeName = useSelector(selectChangeName)
    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.trim() !== '') {
            setErrorName(false)
            setErrorNameStr(null)
        }
        setName(e.currentTarget.value)
    }
    const history = useHistory()

    useEffect(() => {

        setTimeout(() => {
            if (changeName) {
                setDissable(false)
                history.push('chat')
            }
        }, 2000)
    }, [changeName, history])


    function onSentNameHandler() {
        if (name === '') {
            setErrorName(true)
            setErrorNameStr('Заполните поле')
        } else {
            setDissable(true)
            dispatch(setClientName(name))

            setName('')
        }
    }

    return (
        <div className={style.main}>
            <h1>Добро пожаловать</h1>
            <div>
                <span>Представьтесь</span> <input value={name} onChange={changeNameHandler}/>
                <button disabled={dissable} onClick={onSentNameHandler}>Save</button>
                {errorName ? <span>{errorNameStr}</span> : null}
            </div>


        </div>
    );
};

export default Main;