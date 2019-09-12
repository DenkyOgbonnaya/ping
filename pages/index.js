import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useContext} from 'react';
import {AuthContext} from '../context/authContext';
import Chatup from '../components/chat/chatup';
import Router from 'next/router';


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
            <Chatup />
        </div>
    )

    
}
export default App;