import React from 'react';
import JoinWindow from './joinWindow';
import ChatWindow from './chatWindow';
import useChatConText from '../lib/useChatContext';
import useAuthContext from '../lib/useAuthContext';

const Chatroom = () => {
    const{chatData} = useChatConText();
    const{authData} = useAuthContext();

    const{selectedRoom} = chatData;
    const{nickname} = authData;

    if(selectedRoom && selectedRoom.members.includes(nickname))
        return (
            <ChatWindow />
        )
    return(
        <JoinWindow 
            room = {selectedRoom.name} 
            participants = {selectedRoom.members.length}
            description = {selectedRoom.description}
         />
    )
}

export default Chatroom;