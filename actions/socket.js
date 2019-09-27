import io from 'socket.io-client';
  const socket = io.connect();

  export const registerMessageHandler = (handleMessage) => {
    socket.on('message', handleMessage)
  }

  export const unregisterMessageHandler = () => {
    socket.off('message')
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
  
  
  


