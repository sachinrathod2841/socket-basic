var socket = io();

socket.on('connect',function(){
console.log('Connected to socket.io server!');

socket.emit('message',{
	text : 'Welcome to the chat application of client !'
});
});

socket.on('message',function(message){
	console.log('New message');
	console.log(message.text);
});