import React, {ChangeEvent, useEffect, useState} from 'react';
import io from 'socket.io-client';
import './App.css';
// const socket = io('https://chat-back-test.herokuapp.com/')
const socket = io('http://localhost:3009/')
function App() {
  const [mes, setMes] = useState<any[]>([]
  )
    const [value, setValue] = useState('hello')
    const [name, setName] = useState('')
    useEffect(() => {
        socket.on('messages-init', ((messages: any) => {
            setMes(messages)
        }))
        socket.on('new-message-sent', ((mesNew:any) => {
            setMes((mes) => [...mes, mesNew])
        }))
    }, [])
    const onClickHandler = () => {
        socket.emit('client-message-sent', value)
        setValue('')
    }
    const changeValueHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.currentTarget.value)
    }
    const changeNameHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }

    function onSentNameHandler() {
        socket.emit('client-name-sent', name)
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
      </div>
        <div>
            <input value={name} onChange={ changeNameHandler}/>
            <button onClick={onSentNameHandler}>Send</button>
        </div>
        <div className={'sendMessage'}>
            <textarea value={value} onChange={ changeValueHandler}/>
            <button onClick={onClickHandler}>Send</button>
        </div>

    </div>
  );
}

export default App;
