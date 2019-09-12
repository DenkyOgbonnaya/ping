import React, {useContext} from 'react';
import JoinWindow from './joinWindow';
import ChatWindow from './chatWindow';
import { ChatContext } from "../../context/chatContext";
import { AuthContext } from "../../context/authContext";

const Chatroom = () => {
    const{chatData} = useContext(ChatContext);
    const{authData} = useContext(AuthContext);

    const{selectedRoom} = chatData;
    const{currentUser} = authData;

    if(selectedRoom && selectedRoom.members.includes(currentUser.nickname))
        return (
            <ChatWindow />
        )
    return(
        <JoinWindow room = {selectedRoom.name} participants={selectedRoom.members.length} />
    )
}

export default Chatroom;