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

            const updatedChatrooms = state.chatrooms.map(room => room.name === chatroomName ?
            Object.assign({}, room, {messages: room.messages.concat(message)}) : room)

            const selectedRoom = updatedChatrooms.find( chatroom => chatroom.name === chatroomName);
        return {
            ...state,
            chatrooms: updatedChatrooms,
            selectedRoom
        }
        default: return state;
        
    }
}

export default chatReducer;