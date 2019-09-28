const chatrooms = require('./chatrooms');

module.exports = () => {
    const getChatrooms = () => chatrooms;
    const getChatroom = name => chatrooms.find(chatroom => chatroom.name === name)
    const addMember = (chatroomName, socket) => {
        
        getChatroom(chatroomName).members.push(socket.nickname);
    }
    const addMessage = (message, chatroomName) => {
        getChatroom(chatroomName).messages.push(message)
    }
    const removeMember = (nickname, chatroomName) => {
        const chatroom = getChatroom(chatroomName);
        chatroom.members = chatroom.members.filter( member => member !== nickname);
    }
    const isMember = (nickname, chatroomName) => {
        return getChatroom(chatroomName).members.includes(nickname);
    }

    return {
        getChatrooms,
        getChatroom,
        addMember,
        addMessage,
        removeMember,
        isMember
    }
}