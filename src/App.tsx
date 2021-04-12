import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {createConnection, destroyConnection} from "./store/chat-reducer";
import {Route, Switch } from 'react-router-dom';
import Main from "./pages/Main";
import ChatLog from './components/Chatlog/ChatLog';


function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(createConnection())
        return () => {
            dispatch(destroyConnection())
        }
    }, [])

    return (
        <>
            <Switch>
                <Route path={'/'} exact render={() => <Main/>}/>
                <Route path={'/chat'} exact render={() => <ChatLog/>}/>
            </Switch>

        </>
    );
}

export default App;
