import React, {useState} from 'react';
import Router from 'next/router';
import { login, toggleIsLogin } from '../actions/authActions';
import useAuthConText from '../components/lib/useAuthContext';
import Spinner from '../components/includes/spinner';


const Login = () => {
    const[nickname, setNickname] = useState('');
    const[password, setPassword] = useState('');

    const{authData, dispatchAuth} = useAuthConText();
    const{isLogin, err, isAuthenticated} = authData;

    const handleLogin = e => {
        e.preventDefault();

        toggleIsLogin(dispatchAuth);
        
        login(nickname, dispatchAuth);
    }
    isAuthenticated && Router.push('/');
    
    return(
        <div className='container' > 
            {err && <div className='alert alert-danger' role='alert' > {err} </div>}
            {isLogin && <Spinner />  }
            <form onSubmit={handleLogin} > 
                <div className='form-group' > 
                    <label htmlFor='username'> nickname </label>
                <input name='nickname' onChange={ e => setNickname(e.target.value)} className='form-control' placeholder='chatGhost' />
            </div>
            <div className='form-group' > 
                <label htmlFor='password'> password </label>
                <input name='password' onChange={ e => setPassword(e.target.value)} className='form-control' placeholder='password' />
            </div>
            <button>Login </button>
        </form>
    </div>
    )
}
export default Login