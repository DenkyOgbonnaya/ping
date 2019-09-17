import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useContext} from 'react';
import {AuthContext} from '../context/authContext';
import Chatup from '../components/chat/chatup';
import Router from 'next/router';
import Spinner from '../components/includes/spinner';


const App = () => {
    const{authData} = useContext(AuthContext);

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
        </div>
    )

    
}
export default App;