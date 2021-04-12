import React, {ChangeEvent, useState} from 'react';
import style from './TextInput.module.scss'
import {setClientMessage, typeMessage} from "../../store/chat-reducer";
import {useDispatch} from "react-redux";
const TextInput = () => {
    const [errorMesStr, setErrorMesStr] = useState<string | null>(null)

    const [errorMes, setErrorMes] = useState<boolean>(false)
    const [value, setValue] = useState('hello')
    const dispatch = useDispatch()
    const onClickHandler = () => {
        if (value === '') {
            setErrorMes(true)
            setErrorMesStr('Заполните поле')
        } else {
            dispatch(setClientMessage(value))
            setValue('')
        }
    }
    const changeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value.trim() !== '') {
            setErrorMes(false)
            setErrorMesStr(null)
        }
        setValue(e.currentTarget.value)
    }
    return (
        <div className={style.mainText}>
            <div className={style.wrapper}>
                <textarea value={value} onChange={changeValueHandler} onKeyPress={() => {
                    dispatch(typeMessage())
                }}/>
                <button onClick={onClickHandler}>Send</button>

            </div>
            <div>
                {errorMes ? <span>{errorMesStr}</span> : null}
            </div>
        </div>
    );
};

export default TextInput;