var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{

	// console when a user connecte
	console.log('a user connected');

	
	socket.on('chat message', (msg)=>{

		// send chat messaeg on to everyone
		io.emit('chat message', msg);

		// log chat messaeg on console
		console.log('message: ' + msg);
	});


	// broadcast for everyone
	socket.broadcast.emit('hi');


	// console when a user disconnected
	socket.on('disconnect',()=>{
		console.log('user dissconnected');
	});

});

http.listen(3000, ()=>{
	console.log('listening on *:3000');
});