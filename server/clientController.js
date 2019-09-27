const clientController = () => {
    const clients = new Map();
    
    const userExist = nickname => {
        return clients.has(nickname);
    }
    const handleRegister = (socket, nickname, cb) => {
        if(userExist(nickname))
            return cb(null, 'This nickname is taken');
        
        socket.nickname = nickname;
        clients.set(nickname, socket);
        return cb('err', nickname)
    }
    const removeUser = nickname => {
        if(userExist(nickname))
            clients.delete(nickname);
    }

    return {
        handleRegister,
        removeUser
    }
}

module.exports = clientController;