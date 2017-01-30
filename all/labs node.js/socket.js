let express = require('express')
let socket = require('socket.io')
let app = express();
let io = socket.listen(app.listen(8080,()=>console.log(8080)))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.sockets.on('connection', client=> {
  client.on('message', data=>{
    client.broadcast.emit('hello', {hello: 'hello from'+data})
  
    console.log(data)
  })
io.sockets.on('a', ()=> {
  console.log('a')
  io.sockets.emit('hello', {hello: 'one of us s`ebalsya'})
})
})