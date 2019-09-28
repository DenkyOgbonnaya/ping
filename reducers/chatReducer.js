import { updateChatroomMessage, updateSelectedRoom } from "./helper";

const chatReducer = (state, action) => {
    switch(action.type){
        case 'SELECTROOM': {
            const selectedRoom = state.chatrooms.find( chatroom => chatroom._id === action.chatroomId);
            return {
                ...state,
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

            const updatedChatrooms = updateChatroomMessage(state, chatroomName, message);
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
        
        default: return state;
        
    }
}

export default chatReducer;