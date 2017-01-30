let http = require('http')
let url = require('url')
let fs = require('fs')
http.createServer((req, res)=>{
  fs.rename('./index.html', './users/index.html', (err, data) => {
    console.log(err)
    console.log(data)

  })
}).listen(8080, ()=>console.log(8080))