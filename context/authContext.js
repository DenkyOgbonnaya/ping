import React, {useReducer } from 'react';
import AuthReducer from '../reducers/authReducer';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const[authData, dispatchAuth] = useReducer( AuthReducer, {
        isAuthenticated: false,
        nickname: '',
        err: '',
        isLogin: false
    })

    return (
        <AuthContext.Provider value = {{authData, dispatchAuth}} > 
            { props.children }
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
