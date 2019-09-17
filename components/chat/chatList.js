import React, {useContext} from 'react';
import { ChatContext } from '../../context/chatContext';
import { setRoomSelected, toggleIsVisibleSidebar } from '../../actions/chatActions';

const ChatList = () => {
    const{chatData, dispatchChat} = useContext(ChatContext);
    const{chatRooms} = chatData;

    const handleChatClicked = chatroom => {
        setRoomSelected(chatroom, dispatchChat);
        toggleIsVisibleSidebar(dispatchChat);
    }
    return(
        <div> 
            <ul className='nav flex-column nav-pills' > 
            {
                chatRooms.map((chatroom, i) => 
                    <div key={i}>
                    <li 
                        className='nav-item' 
                        onClick = {e => handleChatClicked(chatroom)} >
                        <img src='static/defavatar.png' alt='pIX' /> {" "}
                        {chatroom} 
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