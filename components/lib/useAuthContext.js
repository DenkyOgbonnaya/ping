import React, {useContext} from 'react';
import { AuthContext } from '../../context/authContext';

const useAuthConText = () => {
    const{authData, dispatchAuth} = useContext(AuthContext);

    return {authData, dispatchAuth}
}

export default useAuthConText;