import React, {useContext} from 'react';
import WelcomeWindow from './welcomeWindow';
import Chatroom from './chatroom';
import { ChatContext } from '../../context/chatContext';

const Main = () => {
    const{chatData} = useContext(ChatContext);

   return chatData.isRoomSelected ? <Chatroom /> : <WelcomeWindow />
}

export default Main;