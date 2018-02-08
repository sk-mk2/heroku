import * as express from 'express';
const app = express();
import { createServer } from 'http';
const server = createServer(app);
import * as socket from 'socket.io';
const io = socket(server);

app.get('./',(req,res) => {
    res.sendFile('../index.html');
});

io.on('connection', (socket) => { 
    socket.on('chat', (msg) => {
        io.emit('chat', msg);
    });
});

server.on('listening',()=>{
    console.log('listen'); 
});

const process = {
    env:{
        PORT:""
    }
};

server.listen(process.env.PORT ||3000);
