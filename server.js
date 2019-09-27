const express = require('express');
const app = express();
const server = require('http').Server(app);
const next = require('next');
const io = require('socket.io')(server);
const socketController = require('./server/socketController');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production' //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler() //part of next config

io.on('connection', socket => {
    console.log(socket.id, 'connected');
    socket.emit('conected', 'you are connected')
    socketController(socket);
})
nextApp.prepare().then(() => {
    // express code here
    app.use(express.json());
    app.get('*', (req,res) => {
        return handle(req, res) // for all the react stuff
    })
    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`ready at http://localhost:${PORT}`)
    })
})
