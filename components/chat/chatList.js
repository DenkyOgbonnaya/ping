import React from 'react';
import chatActions from '../../actions/chatActions';
import useChatConText from '../lib/useChatContext';

const ChatList = () => {
    const{chatData} = useChatConText();
    const{chatrooms} = chatData;
    const{setRoomSelected, toggleIsVisibleSidebar} = chatActions();

    const handleChatClicked = chatroomId => {
        setRoomSelected(chatroomId);
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
                        onClick = {e => handleChatClicked(chatroom._id)} >
                        <img src='static/defavatar.png' alt='pIX' /> {" "}
                        {chatroom.name} 
                    </li>
                    <hr />
                    </div>
                )
            }
        </ul>
        <style jsx >{`
            li > img {
                height: 50px;
                width: 50px;
                border-radius: 100%;
                
            }
            li {
                font-size : 18px;
                padding: 5px;
            }
            li :hover {
                cursor: pointer;
            }
            hr {
                border-color: #424242;
                border-height: 1px;
            }
        `} </style>
        </div>
    )
}
export default ChatList;