import React from 'react';
import Pane from './pane';
import SearchField from './searchField';
import ChatList from '../chat/chatList';
import useAuthConText from '../lib/useAuthContext';

const SideNav = () => {
    const {nickname} = useAuthConText().authData;
    return(
    <div className='sidenav' > 
        <Pane title={nickname} img='/static/defavatar.png' />
        <SearchField />
        <ChatList />
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