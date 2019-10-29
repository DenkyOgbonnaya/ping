import { getChatrooms, join, sendMsg, handleReceivedMessage }  from "./socket";
import useChatContext from '../components/lib/useChatContext';
import useAuthConText from "../components/lib/useAuthContext";


const chatActions = () => {
    const{ chatData ,dispatch} = useChatContext();
    const currentUser = useAuthConText().authData

    const setRoomSelected = chatroomName => {
        dispatch({
            type: 'SELECTROOM',
            chatroomName
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
    const handleLeaveRoom = (chatroomName, nickName, message) => {
        handleRecievedMessage(message, chatroomName);
        if(nickName === currentUser.nickname)
        dispatch({
            type: 'LEAVE_ROOM',
            payload: {chatroomName, nickName}
        })
    }
    const handleTyping = (message, chatroomName) => {
        dispatch({
            type: 'TYPING',
            payload: {message, chatroomName}
        })
    }
    const handleStopTyping = (message, chatroomName) => {
        dispatch({
            type: 'STOP_TYPING',
            payload: {message, chatroomName}
        })
    }

return {
    setRoomSelected,
    toggleIsVisibleSidebar,
    getRooms,
    joinRoom,
    sendMessage,
    handleRecievedMessage,
    handleTyping,
    handleStopTyping,
    handleLeaveRoom
}
}
export default chatActions;