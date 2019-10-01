import React from 'react';
import chatActions from '../../actions/chatActions';
import useChatConText from '../lib/useChatContext';
import { getLastMessage, formatTime } from './helper';
//import useAuthConText from '../lib/useAuthContext';

const ChatList = () => {
    const{chatData} = useChatConText();
    //const{nickname} = useAuthConText().authData;
    const{chatrooms} = chatData;
    const{setRoomSelected, toggleIsVisibleSidebar} = chatActions();

    const handleChatClicked = chatroomName => {
        setRoomSelected(chatroomName);
        toggleIsVisibleSidebar();
    }
    if(chatrooms.length === 0)
        return <div> No Chat rooms </div>
    return(
        <div> 
            <ul className='nav flex-column nav-pills' > 
            {
                chatrooms.map((chatroom) => 
                    <div key={chatroom._id}>
                    <li 
                        className='nav-item' 
                        onClick = {e => handleChatClicked(chatroom.name)} >
                        <img src='static/defAvatar.png' alt='pIX' /> 
                        <span className='chatname'> {chatroom.name} </span>
                        {/*
                        { chatroom.members.includes(nickname) ? 
                            <span className='chat-sender'> <small> {getLastMessage(chatroom).sender} : {getLastMessage(chatroom).text.slice(0, 20)}} </small> </span> :
                            <small className='chat-description'> {chatroom.description.slice(0, 20)}... </small>
                        }
                            
                        {  chatroom.members.includes(nickname) && <span className='chat-time'> <small> {formatTime( getLastMessage(chatroom).time )} </small> </span>}
                    */}
                        {   chatroom.notifications > 0 && <span className='notifs' >{chatroom.notifications}</span>}
                        
                    </li>
                    <hr />
                    </div>
                )
            }
        </ul>
        <style jsx >{`
            li {
                flex-direction: row;
                font-size : 16px;
                padding: 5px;
                font-weight: 20px;
            }
            li > img {
                height: 50px;
                justify-self: start;
                width: 50px;
                border-radius: 100%;
                
            }
            
            li :hover {
                cursor: pointer;
            }
            .chatname, {
                font-weight: bold;
                justify-self: start;
            }
            
            hr {
                border-color: #424242;
                border-height: 1px;
            }
            .notifs {
                float: right;
                background: #c62828;
                color: #ffffff;
                padding: 0px 5px 5px 5px;
                min-width: 20px;
                height: 20px;
                font-size: 10px;
                border-radius: 50%;
                justify-self: end;
                align-self: start
                
            }
            
        `} </style>
        </div>
    )
}
export default ChatList;