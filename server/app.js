const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('IO Connected');

    socket.emit('newMessage', {
        text: 'test text',
    })
});

module.exports = {
    app,
    server,
};
