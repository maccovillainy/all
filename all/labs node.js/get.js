const http = require('http'),
  url = require('url')

let server = http.createServer((req, res) => {
  let user = url.parse(req.url)
  console.log(user.query.split('=')[1])
  console.log(user)
/*  if(user.query){
    swith(user.query[0]){
      case
    }
  }*/
}).listen(8081)