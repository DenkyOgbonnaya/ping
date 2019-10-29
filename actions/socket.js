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
  export const registerLeaveRoom = (handleLeaveRoom) => {
    socket.on('leaveRoom', handleLeaveRoom)
  }

  export const unregisterLeaveRoom = () => {
    socket.off('leaveRoom')
  }
  
  
  socket.on('error', function (err) {
    console.log('received socket error:')
  })
export const registerReconnect = cb => {
  socket.on("reconnect", cb);
};

export const registerReconnecting = cb => {
  socket.on("reconnecting", cb);
};

export const registerUserDisconnect = cb => {
  socket.on("disconnect", cb);
};
export const registerReconnectError = cb => {
  socket.on("reconnect_error", cb);
};

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
  export const leaveRoom = chatroomName => {
    socket.emit('leaveRoom', chatroomName);
  }
  


