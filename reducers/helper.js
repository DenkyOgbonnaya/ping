const updateNotifs = (notifications, notification) => {
    if(notification !== 0)
        return notifications+notification;
    return notification;
    
}

export const updateChatroomMessage = (state, chatroomName, message, notification) => {
    return state.chatrooms.map(room => room.name === chatroomName ?
        Object.assign({}, room, {
            messages: room.messages.concat(message),
            notifications: updateNotifs(room.notifications, notification)
        }) : room);
}
export const updateSelectedRoom = (state, updatedChatrooms, chatroomName) => {
    return state.selectedRoom.name !== chatroomName ? state.selectedRoom :
                updatedChatrooms.find( chatroom => chatroom.name === chatroomName);
}

export const updateNotification = (state, chatroomName, value) => {
   return state.chatrooms.map( chatroom => chatroom.name === chatroomName ?
    Object.assign({}, chatroom, {notifications: updateNotifs(chatroom.notifications, value)}) : chatroom)
}
export const isSelectedRoom = (chatroomName, selectedRoomName) => {
    return chatroomName === selectedRoomName;
}
export const removeUser = (state, chatroomName, nickName) => {
    return state.chatrooms.map(room => room.name === chatroomName ?
        Object.assign({}, room, {
            members: room.members.filter(member => member !== nickName)
        }) : room);
}