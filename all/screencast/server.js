let User = require('./users')

function run(){
  let vasya = new User('Вася')
  let petya = new User('петя')

  vasya.hello(petya)
}


if (module.parent){
  exports.run = run
}else{
  run()
}

