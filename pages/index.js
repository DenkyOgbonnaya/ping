import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useContext} from 'react';
import {AuthContext} from '../context/authContext';
import Chatup from '../components/chat/chatup';
import Router from 'next/router';
import Spinner from '../components/includes/spinner';
import { socketInit } from '../actions/authActions';
import socket from '../actions/socket';


const App = () => {
    const{authData, dispatchAuth} = useContext(AuthContext);

    /*useEffect( () => {
        ( () => {
            socketInit(socket, dispatchAuth);
        } )();
    }, [])*/
    useEffect( () => {
       const isUserAuth = () => {
           if(!authData.isAuthenticated)
                Router.push('/login');
       }
       isUserAuth();
    }, [])
    return(
        <div className="app">
            {
                authData.isAuthenticated ?
                <Chatup /> :
                <Spinner />
            }
            <style jsx>{`
                * {
                    margin: 0;
                }
            `} </style>
        </div>
    )

    
}
export default App;