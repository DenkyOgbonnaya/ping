import React, {useReducer } from 'react';
import chatReducer from '../reducers/chatReducer';

export const ChatContext = React.createContext();

const ChatContextProvider = (props) => {
    const[chatData, dispatchChat] = useReducer(chatReducer, {
        chatRooms: ['Php', 'JavaScripters', 'Python'],
        isRoomSelected: false,
        isVisibleSidebar: false,
        selectedRoom: {
            name: 'JavaScripters',
            members: ['Denky', 'Dennis', 'James'],
            chatHistory: [
                {_id: 10, sender:'denky', text:'Hi'},
                {_id: 2, sender:'dennis', text:'Hello'},
                {_id: 3, sender:'dennis', text:'WHo AM I oN To'},
                {_id: 54, sender:'Jennis', text:'Mark joint'},
                {_id: 4, sender:'Denky', text:'its denky'},
                {_id: 5, sender:'denky', text:'denky oGB'},
                {_id: 1, sender:'Jennis', text:'mark left'},
                {_id: 6, sender:'Jennis', text:'John left'},
                {_id: 7, sender:'denky', text:'hey watch yoUR WoRDS'},
                {_id: 8, sender:'dennis', text:'haaha stroKESoME NERVER'},
                {_id: 9, sender:'Denky', text:'CJJFJ'},
                {_id: 97, sender:'dennis', text:'KKEKK'},
                {_id: 54, sender:'Jennis', text:'Mark joint'},
                {_id: 43, sender:'Denky', text:'its denky'},
                {_id: 54, sender:'denky', text:'denky oGB'},
                {_id: 75, sender:'Jennis', text:'mark left'},
                {_id: 63, sender:'Jennis', text:'John left'},
                {_id: 47,  sender:'denky', text:'hey watch yoUR WoRDS'},
                {_id: 38, sender:'dennis', text:'haaha stroKESoME NERVER'},
                {_id: 94, sender:'Denky', text:'CJJFJ'},
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
