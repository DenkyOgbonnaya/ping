import React, {useReducer } from 'react';
import chatReducer from '../reducers/chatReducer';

export const ChatContext = React.createContext();

const ChatContextProvider = (props) => {
    const[chatData, dispatchChat] = useReducer(chatReducer, {
        chatRooms: ['Php', 'JavaScripters', 'Python'],
        isRoomSelected: false,
        selectedRoom: {
            name: 'JavaScripters',
            members: ['Denky', 'Dennis', 'James'],
            chatHistory: [
                {_id: 1, sender:'denky', text:'Hi'},
                {_id: 2, sender:'dennis', text:'Hello'},
                {_id: 3, sender:'dennis', text:'WHo AM I oN To'},
                {_id: 4, sender:'Denky', text:'its denky'},
                {_id: 5, sender:'denky', text:'denky oGB'},
                {_id: 6, sender:'Jennis', text:'who THE FUCK IS DENKY oGB'},
                {_id: 7, sender:'denky', text:'hey watch yoUR WoRDS'},
                {_id: 8, sender:'dennis', text:'haaha stroKESoME NERVER'},
                {_id: 9, sender:'Denky', text:'CJJFJ'},
                {_id: 97, sender:'dennis', text:'KKEKK'},
            ]
        }
    })

    return (
        <ChatContext.Provider value = {{chatData, dispatchChat}} > 
            { props.children }
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;
