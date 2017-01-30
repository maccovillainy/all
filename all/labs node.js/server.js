const http = require('http')

let server = http.createServer((req, res) =>{
  req.on('data', data => {
    console.log(data.toString())
    console.log(JSON.parse(data.toString()))
    res.writeHead(200)
    res.write(data.toString())
  })
})

server.listen(3000, ()=> console.log(3000))