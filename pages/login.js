import React, {useState} from 'react';
import Router from 'next/router';
import { login, toggleIsLogin } from '../actions/authActions';
import useAuthConText from '../components/lib/useAuthContext';
import Spinner from '../components/includes/spinner';


const Login = () => {
    const[nickname, setNickname] = useState('');

    const{authData, dispatchAuth} = useAuthConText();
    const{isLogin, err, isAuthenticated} = authData;

    const handleLogin = e => {
        e.preventDefault();

        toggleIsLogin(dispatchAuth);
        
        login(nickname, dispatchAuth);
    }
    isAuthenticated && Router.push('/');
    
    return(
        <div className='contgainer' > 
            
            <div className='form'> 
            <div className='logo'>
                <img src='static/cool_ic.png' alt='logo' />
                <h3>Ping </h3>
            </div>
            {err && <div className='alert alert-danger' role='alert' > {err} </div>}
            {isLogin && <Spinner />  }
            <form className='form'  onSubmit={handleLogin} >
                <div className='form-group' > 
                    <label htmlFor='username'> Enter a cool nickname </label>
                <input name='nickname' onChange={ e => setNickname(e.target.value)} className='form-control' placeholder='chatGhost' />
            </div>
            <button className='btn btn-primary'>Login </button>
        </form>
            </div>
        <style jsx>{`
            .contgainer {
                display: table;
                height: 100%;
                margin:0 auto;
                background: #e0e0e0
            }
            h3 {
                color: #0048AA;
            }
            .form {
                display: table-cell;
                vertical-align: middle;
               padding: 5px;
               width: 300px;
               height: 350px
            }
        `}</style>
    </div>
    )
}
export default Login