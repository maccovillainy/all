var express = require('express');
var app = express();
var fs = require('fs')

app.get('/', function (req, res) {
  fs.readFile('index.html', 'utf8', (err, data) =>{
    if (err) console.log(err)
    else{
    res.send(data);
      
    }
  })
});

app.get('/about.html', function (req, res) {
  fs.readFile('about.html', 'utf8', (err, data) =>{
    if (err) console.log(err)
    else{
    res.send(data);
      
    }
  })
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
