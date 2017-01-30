const fs = require('fs')
const url = require('url')

const fn = (path, res) => {
  fs.readFile(path, null, (err, data) => {
    if (err) console.log('error')
    else{
      res.write(data)
    }
    res.end()
  })
}

module.exports = {
  getApp: function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'})
    let path = url.parse(req.url).pathname;
    switch (path){
      case '/':
        fn('./index.html', res)
      break;
      case '/contuct':
        fn('./contuct.html', res)
      break;
      default:
        res.writeHead(404);
        res.write('Not found')
        res.end()
    }
  }
}