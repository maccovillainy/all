const http = require('http');
const fs = require('fs');

const obj = require('./model1');
const app = require('./myApp');



http.createServer(app.getApp).listen(3000, () => console.log(3000))