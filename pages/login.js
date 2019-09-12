import React, {useState, useContext} from 'react';
import Router from 'next/router';
import { AuthContext } from '../context/authContext';
import LoginForm from '../components/auth/loginFom';
import { login } from '../actions/authActions';

const Login = () => {
    const[nickname, setNickname] = useState('');
    const[password, setPassword] = useState('');
    const{authData, dispatchAuth} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const user = {nickname, password, _id: 1};
        login(user, dispatchAuth)
        .then(data =>{
            if(data)
                console.log(data)
        })
    }
    authData.isAuthenticated && Router.push('/');
    return(
        <div> 
            <LoginForm 
                setNickname={setNickname} 
                setPassword={setPassword} 
                handleLogin={handleLogin}
            />
        </div>
    )
}
export default Login