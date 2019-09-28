import io from 'socket.io-client';
  const socket = io.connect();

  export const registerMessageHandler = (handleMessage) => {
    socket.on('message', handleMessage)
  }

  export const unregisterMessageHandler = () => {
    socket.off('message')
  }
  export const registerTypingHandler = (handleTyping) => {
    socket.on('typing', handleTyping)
  }

  export const unregisterTypingHandler = () => {
    socket.off('typing')
  }
  export const registerStopTypingHandler = (handleStopTyping) => {
    socket.on('stopTyping', handleStopTyping);
  }

  export const unregisterStopTypingHandler = () => {
    socket.off('stopTyping')
  }
  
  
  socket.on('error', function (err) {
    console.log('received socket error:')
  })

  export const register = (nickname, cb) => {
    socket.emit('register', nickname, cb)
  }

  export const join = (chatroomName, cb) => {
    socket.emit('joinRoom', chatroomName, cb)
  }

  export const leave = (chatroomName, cb) => {
    socket.emit('leave', chatroomName, cb)
  }

  export const sendMsg = (message, chatroomName) => {
    socket.emit('message', message, chatroomName )
  }

  export const getChatrooms = (cb) => {
    socket.emit('chatrooms', null, cb)
  }

  export const getAvailableUsers = (cb) => {
    socket.emit('availableUsers', null, cb)
  }
  export const typing = chatroomName => {
    socket.emit('typing', chatroomName)
  }
  export const stopTyping = chatroomName => {
    socket.emit('stopTyping', chatroomName)
  }
  
  


