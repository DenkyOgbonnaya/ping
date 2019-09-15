import React, {useContext} from 'react';
import { ChatContext } from '../../context/chatContext';
import { setRoomSelected } from '../../actions/chatActions';
import Pane from './pane';
import SearchField from './searchField';
import ChatList from '../chat/chatList';

const SideNav = () => {
    const{chatData, dispatchChat} = useContext(ChatContext);

    const setChatSelected = (chat) => {
        setRoomSelected(chat, dispatchChat);
    }
    return(
    <div className='sidenav' > 
        <Pane title='Denky' img='/static/defavatar.png' />
        <SearchField />
        <ChatList 
            chatList = {chatData.chatRooms} 
            setChatSelected = {setChatSelected}
            />
        <style jsx>{`
            .sidenav {
                padding: 5px;
                background: #0048AA;
                border-radius:0px 0 0 10px;
                height:100vh;
                color: #fafafa;
            }
        `}</style>
    </div>
    )
}

export default SideNav;