const {constructMessage} = require('./helper')
const {
    getChatroom,
    getChatrooms,
    addMember,
    removeMember,
    isMember
} = require('./chatroomManager')();
const {removeUser} = require('./clientController')()

const chatroomController = () => {
    const handleGetChatrooms = () => getChatrooms();

    const handleJoinRoom = (chatroomName, socket, cb) => {
        addMember(chatroomName, socket);
        socket.join(chatroomName);

        socket.broadcast.to(chatroomName).emit('message', constructMessage('log', `${socket.nickname} joined`) , chatroomName );
        return cb(null, getChatroom(chatroomName));
    }
    const handleMessage = (message, chatroomName, socket) => {
        if(socket.nickname){
            const newMessage = constructMessage(socket.nickname, message);
            socket.emit("message", newMessage, chatroomName);
            socket.broadcast.to(chatroomName).emit('message', newMessage, chatroomName );
        }
    }
    const handleDisconnect = (socket) => {
        removeUser(socket.nickname);

        getChatrooms().forEach(chatroom => {
            if(chatroom.members.includes(socket.nickname)){
                removeMember(socket.nickname, chatroom.name);
                socket.broadcast.to(chatroom.name).emit('message', constructMessage('log', `${socket.nickname} left`) , chatroom.name)
            }
        });
    }
    const handleTyping = (socket, chatroomName ) => {
        if(socket.nickname && isMember(socket.nickname, chatroomName)){
            socket.broadcast.to(chatroomName).emit('typing', `${socket.nickname} is typing...`, chatroomName)
        }
    }
    const handleStopTyping = (socket, chatroomName ) => {
        if(socket.nickname && isMember(socket.nickname, chatroomName)){
            socket.broadcast.to(chatroomName).emit('stopTyping', "", chatroomName)
        }
    }
    const handleLeaveRoom = (socket, chatroomName) => {
        if(socket.nickname && isMember(socket.nickname, chatroomName)){
            const message = constructMessage('log', `${socket.nickname} left`)
            socket.nsp.to(chatroomName).emit('leaveRoom', chatroomName, socket.nickname, message);
        }
    }

    return {
        handleGetChatrooms,
        handleJoinRoom,
        handleMessage,
        handleDisconnect,
        handleTyping,
        handleStopTyping,
        handleLeaveRoom
    }
}

module.exports = chatroomController;