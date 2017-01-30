let express = require('express');
let request = require('request');
let url = require('url');
let app = express();
app.set('views', __dirname)
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

let users = {
  max: 'admin',
  john: 'user',
  ana: 'guest'
}

app.get('/user/:name', (req, res) => {
  let name = req.params.name;
  if (name in users){
  let options = {
    protocol: 'http',
    host: 'localhost:8081',
    pathname: '/',
    query: {name: name}
  }
  let needUrl = url.format(options)
  console.log(needUrl)
  request(needUrl, (err, req, body) => {
    console.log(body)
  })
    res.render('user', {name:users[name]})
  }else
    res.render('user', {name:'unknown'})
})

app.listen(8080, () => console.log(8080))