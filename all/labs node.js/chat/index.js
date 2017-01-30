let express = require('express');
let app = express();
let socket = require('socket.io')
let io = socket.listen(app.listen(8080, ()=>console.log(8080)))

app.set('views', __dirname);
app.set('view engine', 'ejs');

let users = []
io.sockets.on('connection', client => {
  let name = ''
  client.on('enter', data => {
    users.push(data.name)
    name = data.name
    client.emit('hello', {hello: 'welcome ! в чате'+users.join(', ')})
  })
  client.on('exit', data => {
    console.log(data)
  })
  client.on('message', data => {
    io.sockets.emit('newMessage', {
      text: data.text,
      name: data.name
    })
  })
  client.on('disconnect', ()=> {
    users.splice(users.indexOf(name),users.indexOf(name))
    io.sockets.emit('out', {
      out: name,
      rest: users
    })
  })
})
app.use((req,res,next) => {
  console.log([{a:2}])
  console.dir([{a:2}])
  next()
})
app.get('/', (req, res) => {
  res.render('index.ejs');
})
