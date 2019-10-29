import React, {useReducer } from 'react';
import chatReducer from '../reducers/chatReducer';

export const ChatContext = React.createContext();

const ChatContextProvider = (props) => {
    const[chatData, dispatch] = useReducer(chatReducer, {
        chatrooms: [],
        isRoomSelected: false,
        isVisibleSidebar: false,
        selectedRoom: undefined
    })

    return (
        <ChatContext.Provider value = {{chatData, dispatch}} > 
            { props.children }
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;
