import React, {useReducer} from 'react';
import connectionReducer from '../reducers/connectionReducer';

export const ConnectionContext = React.createContext();
const ConnectionContextProvider = props => {
    const[status, dispatch]= useReducer(connectionReducer , {
        connected: true,
        message: 'Connecting'
    })

    return(
        <ConnectionContext.Provider value = { {status, dispatch}} > 
            {props.children}
        </ConnectionContext.Provider>
    )
}

export default ConnectionContextProvider;