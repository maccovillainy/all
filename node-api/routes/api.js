var express = require('express');
var router = express.Router();

var db = {
  usersCount: 0,
  users: []
};

db.addUser = function(user) {
  var exists;

  db.users.map((u) => {
    if(u.name == user.name) {
      exists = true;
    }
  });

  if(exists) {
    return false;
  }

  user.id = ++db.usersCount;
  db.users.push(user);

  return user;
};

db.getUser = function(id) {
  var user = null;

  db.users.map((u) => {
    if(u.id == id) {
      user = u;
    }
  });

  return user;
};

db.deleteUser = function(id) {



  var user = null;

  db.users.map((u, i) => {
    if(u.id == id) {
      user = u
      db.users.splice(i, 1);
    }
  });

  return user;
};

db.changeUser = function(id, data) {
var exists;

db.users.map((u) => {
  if(u.name == data.name) {
    exists = true;
  }
});

if(exists) {
  return false;
}
  var user = null;

  db.users.map((u, i) => {
    if(u.id == id) {
      user = db.users[i] = Object.assign(u, data);
    }
  });

  return user;
};

db.addUser({
  name: 'Mike',
  password: 1,
  singIn: false
});

router.get('/users/', function(req, res) {
  res.send({users: db.users});
});

router.get('/users/:id', function(req, res, next) {
  let user = db.getUser(req.params.id);

  if(!user) {
    var err = new Error('Not found user');
    err.status = 404;
    return next(err);
  }

  res.send({user: user});
});

router.post('/users/', function(req, res, next) {
  if(!req.body.name) {
    var err = new Error('Please set user name');
    err.status = 404;
    return next(err);
  }

  let user = db.addUser(req.body);

  if(!user) {
    var err = new Error('User already exists');
    err.status = 404;
    return next(err);
  }

  res.send({user: user});
});

router.put('/users/:id', function(req, res, next) {
  let user = db.changeUser(req.params.id, req.body);

  if(!user) {
    var err = new Error('User already exists');
    err.status = 404;
    return next(err);
  }

  res.send({user: user});
});

router.delete('/users/:id', function(req, res, next) {
  let user = db.deleteUser(req.params.id);

  if(!user) {
    var err = new Error('Not found user');
    err.status = 404;
    return next(err);
  }

  res.send({deletedUser: user});
});

router.delete('/users/', function(req, res, next) {
  db.users = [];
  res.send({users: []});
});

module.exports = router;
