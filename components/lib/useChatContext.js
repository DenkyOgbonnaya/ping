import React, {useContext} from 'react';
import { ChatContext } from '../../context/chatContext';

const useChatConText = () => {
    const{chatData, dispatch} = useContext(ChatContext);

    return {chatData, dispatch}
}

export default useChatConText;