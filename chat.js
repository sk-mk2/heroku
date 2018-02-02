const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { 
    socket.on('chat', (msg) => {
        io.emit('chat', msg);
    });
});

server.on('listening',()=>{
    console.log('listen'); 
});

server.listen(process.env.PORT ||3000);
