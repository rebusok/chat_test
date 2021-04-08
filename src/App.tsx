import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import io from 'socket.io-client';
import './App.css';
// const socket = io('https://chat-back-test.herokuapp.com/')
const socket = io('http://localhost:3009/')

function App() {
    const [mes, setMes] = useState<any[]>([])
    const [errorNameStr, setErrorNameStr] = useState <string | null>(null)
    const [errorMesStr, setErrorMesStr] = useState <string | null>(null)
    const [erroName, setErrorName] = useState<boolean>(false)
    const [erroMes, setErrorMes] = useState<boolean>(false)
    const [value, setValue] = useState('hello')
    const [name, setName] = useState('')
    useEffect(() => {
        socket.on('messages-init', ((messages: any) => {
            setMes(messages)
        }))
        socket.on('new-message-sent', ((mesNew: any) => {

            setMes((mes) => [...mes, mesNew])
        }))
    }, [])
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
    }, [mes])

    const onClickHandler = () => {

        if(value === '') {
            setErrorMes(true)
            setErrorMesStr('Заполните поле')
        } else {
            socket.emit('client-message-sent', value)
            setValue('')
        }
    }
    const changeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget.value.trim() !== ''){
            setErrorMes(false)
            setErrorMesStr(null)
        }
        setValue(e.currentTarget.value)
    }
    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.currentTarget.value.trim() !== ''){
            setErrorName(false)
            setErrorNameStr(null)
        }
        setName(e.currentTarget.value)
    }

    function onSentNameHandler() {

        if(name === '') {
            setErrorName(true)
            setErrorNameStr('Заполните поле')
        } else {
            socket.emit('client-name-sent', name)
            setName('')
        }
    }

    return (
        <div className="App">
            <div className={'message'}>
                {mes.map(m => {
                    return (
                        <div key={m.id}>
                            <b>{m.user.name} : </b> {m.message}
                            <hr/>
                        </div>
                    )
                })}
                <div ref={messagesAnchorRef}/>
            </div>
            <div>
                <input value={name} onChange={changeNameHandler}/>
                <button onClick={onSentNameHandler}>Send</button>
                {erroName ? <span>{errorNameStr}</span> : null}
            </div>
            <div className={'sendMessage'}>
                <textarea value={value} onChange={changeValueHandler}/>
                <button onClick={onClickHandler}>Send</button>
                {erroMes ? <span>{errorMesStr}</span> : null}
            </div>

        </div>
    );
}

export default App;
