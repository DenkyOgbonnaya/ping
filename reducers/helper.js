export const updateChatroomMessage = (state, chatroomName, message) => {
    return state.chatrooms.map(room => room.name === chatroomName ?
        Object.assign({}, room, {messages: room.messages.concat(message)}) : room);
}
export const updateSelectedRoom = (state, updatedChatrooms, chatroomName) => {
    return state.selectedRoom.name !== chatroomName ? state.selectedRoom :
                updatedChatrooms.find( chatroom => chatroom.name === chatroomName);
}