const {handleRegister} = require('./clientController')();
const{
    handleGetChatrooms,
    handleJoinRoom,
    handleMessage,
    handleTyping,
    handleStopTyping,
    handleDisconnect,
    handleLeaveRoom
} = require('./chatroomController')();

module.exports = socket => {
    socket.on('register', (nickname, cb) => {
        handleRegister(socket, nickname, cb);
    } )
    socket.on('chatrooms', (data, cb)=> {
        cb(null, handleGetChatrooms());
    })
    socket.on('joinRoom', (chatroomName, cb) => {
        handleJoinRoom(chatroomName, socket, cb);
    })
    socket.on('message', (message, chatroomName) => {
        handleMessage(message, chatroomName, socket);
    } )
    socket.on('disconnect', () => {
        handleDisconnect(socket);
    })
    socket.on('typing', chatroomName => {
        handleTyping(socket, chatroomName);
    })
    socket.on('stopTyping', chatroomName => {
        handleStopTyping(socket, chatroomName);
    })
    socket.on('leaveRoom', chatroomName => {
        handleLeaveRoom(socket, chatroomName);
    })
}