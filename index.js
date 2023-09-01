let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let route = require('./routes/route');

let http = require('http').createServer(app);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', route);


let io = require('socket.io')(http);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval ( () => {
        socket.emit('number', parseInt(Math.random()*10));

    }, 1000);
});



http.listen(port, () => {
    console.log('server started');
});




