import React from 'react';
import WelcomeWindow from './welcomeWindow';
import Chatroom from './chatroom';
import useChatConText from '../lib/useChatContext';

const Main = () => {
    const{chatData} = useChatConText();

   return chatData.isRoomSelected ? <Chatroom /> : <WelcomeWindow />
}

export default Main;