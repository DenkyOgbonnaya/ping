import { 
    updateChatroomMessage, 
    updateSelectedRoom, 
    updateNotification, 
    isSelectedRoom,
    removeUser
 } from "./helper";

const chatReducer = (state, action) => {
    switch(action.type){
        case 'SELECTROOM': {
            const{chatroomName} = action;
            const updatedChatrooms = updateNotification(state, chatroomName, 0);
            const selectedRoom = updatedChatrooms.find( chatroom => chatroom.name === chatroomName);
            
            return {
                ...state,
                chatrooms: updatedChatrooms,
                selectedRoom,
                isRoomSelected: true
            }
        }
        case 'TOGGLE_ISVISIBLE_SIDEBAR':
            return {
                ...state,
                isVisibleSidebar: !state.isVisibleSidebar
            }
        case 'GET_CHATROOMS': 
            return {
                ...state,
                chatrooms: action.chatrooms
            }
        case 'JOIN_ROOM' :
            const chatroom = action.payload;
            return {
                ...state,
                chatrooms: state.chatrooms.map(cr => cr._id === chatroom._id ? chatroom : cr),
                selectedRoom: chatroom
            }
        case 'MESSAGE' : 
            const{message, chatroomName} = action.payload;
            const notification = isSelectedRoom(chatroomName, state.selectedRoom.name) ? 0 : 1;

            const updatedChatrooms = updateChatroomMessage(state, chatroomName, message, notification);
            const selectedRoom = updateSelectedRoom(state, updatedChatrooms, chatroomName);
            return {
                ...state,
                chatrooms: updatedChatrooms,
                selectedRoom
        }
        case 'STOP_TYPING' :
        case 'TYPING' : {
            const{message, chatroomName} = action.payload;
            if(state.selectedRoom.name !== chatroomName)
                return state;
            return {
                ...state,
                selectedRoom: Object.assign({}, state.selectedRoom, {typingMessage: message})
            }
        }
        case 'LEAVE_ROOM' : {
            const{chatroomName, nickName} = action.payload;
            const updatedChatrooms = removeUser(state, chatroomName, nickName);
            const selectedRoom = updateSelectedRoom(state, updatedChatrooms, chatroomName);
            return {
                ...state,
                chatrooms: updatedChatrooms,
                selectedRoom
            }

        }

        default: return state;
        
    }
}

export default chatReducer;