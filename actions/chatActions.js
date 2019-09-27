import rooms from "./chatroom";
import { getChatrooms, join, sendMsg, handleReceivedMessage }  from "./socket";
import useChatContext from '../components/lib/useChatContext';


const chatActions = () => {
    const{dispatch} = useChatContext();

    const setRoomSelected = (chatroomId) => {
        dispatch({
            type: 'SELECTROOM',
            chatroomId
        })
    }  
    const toggleIsVisibleSidebar = () => {
        dispatch({
            type: 'TOGGLE_ISVISIBLE_SIDEBAR',
        })
    }
    const getRooms = () => {
        getChatrooms( (err, chatrooms) => {
            if(chatrooms){
                dispatch({
                    type: 'GET_CHATROOMS',
                    chatrooms
                })
            }
        })
    }
    const joinRoom = (chatroomName) => {
        join(chatroomName, (err, chatroom) => {
            dispatch({
                type: 'JOIN_ROOM',
                payload: chatroom
            })
        })
    }
    const sendMessage = (message, chatroomName) => {
        sendMsg(message, chatroomName)
    }
    const handleRecievedMessage = (message, chatroomName) => {

            dispatch({
                type: 'MESSAGE',
                payload: {message, chatroomName}
            })
        
    }

return {
    setRoomSelected,
    toggleIsVisibleSidebar,
    getRooms,
    joinRoom,
    sendMessage,
    handleRecievedMessage
}
}
export default chatActions;