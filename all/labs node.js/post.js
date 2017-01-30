let http = require('http');
const makeReq = msg => {
  let options = {
    host: 'localhost',
    port: 3000,
    pash: '/',
    method: 'post'
  }

  let request = http.request(options, res =>{
    res.on('data', res => console.log('post ' + res))
  }) 

  request.write(msg)
}

makeReq(JSON.stringify({name: 'max', age: 23})) 