import React, {useContext} from 'react';
import {ConnectionContext} from '../../context/connectionContext';

const useConnectionContext = () => {
    const{status, dispatch} = useContext(ConnectionContext);

    return {status, dispatch}
}

export default useConnectionContext;