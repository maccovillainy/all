let express = require('express');
let app = express();
let url = require('url')
app.get('/', (req, res)=> {
  console.log(req.query)
  res.send(true)
})

app.listen(8081, ()=>console.log(8081));