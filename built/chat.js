"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var http_1 = require("http");
var server = http_1.createServer(app);
var socket = require("socket.io");
var io = socket(server);
app.get('./', function (req, res) {
    res.sendFile('./index.html');
});
io.on('connection', function (socket) {
    socket.on('chat', function (msg) {
        io.emit('chat', msg);
    });
});
server.on('listening', function () {
    console.log('listen');
});
var process = {
    env: {
        PORT: ""
    }
};
server.listen(process.env.PORT || 3000);
