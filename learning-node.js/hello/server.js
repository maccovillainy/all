let http = require('http'),
      fs = require('fs'),
     url = require('url'),
    path = require('path')

let types = {
  '.js' : 'text/javascript',
  '.html': 'text/html',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  'ico': 'mage/x-icon'
};

  http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname
    if (pathname == '/') pathname = '/index.html';
    pathname = pathname.substring(1, pathname.length);
    var extname = path.extname(pathname)
    var type = types[path.extname(pathname)]
    console.log(extname, type)
    fs.readFile(pathname, 'utf8', (err, data) => {
      if (err) console.log(err)
      else{
        res.writeHead(200, {'content-type': type})
        res.end(data)
      }
    })
  }).listen(8080, () => console.log('port 8080'))