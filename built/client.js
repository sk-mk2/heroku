(function(){

    import * as socket from 'socket.io';
    var form = document.getElementById('form');
    var chat = document.getElementById('chat');
    var messages = document.getElementById('messages');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        socket.emit('chat', chat.value);
        chat.value = '';
    });

    socket.on('chat',(msg)=>{
        let li = document.createElement('li');
        li.textContent =msg;
        messages.appendChild(li);
    });
})();
