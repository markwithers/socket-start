var _ = require('underscore');
var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 3333);

app.configure(function() {
    app.use(express.bodyParser())
    app.use(express.methodOverride())
    app.use(express.cookieParser())
    app.use(express.static(__dirname + '/public'))
    app.use(app.router)
})

var io = require('socket.io').listen(3232);

var message = 'Hello World!';

setInterval(function(){
  io.sockets.emit('message', message);
}, 3000);

io.sockets.on('connection', function (socket) {
  socket.on('change-to', function(msg){
    message = msg;
  })
});