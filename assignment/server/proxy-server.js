(function () {
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var session = require('express-session');
    var cookieParser = require('cookie-parser');
    var request = require('request');
    var clientUrl = 'http://localhost:3000';

    app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
    });

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(session({ secret: 'This is my secret app' }));
    app.get('/isLoggedIn', function (req, res) {
        if (!req.session.userId) {
            res.send({ isLoggedIn: false });
        }
        else {
            res.send(req.session.userId);
        }
    })
    app.post('/login', function (req, res) {
        var body = req.body;
        console.log(body);
        var isRegisteredUser = false;
        if (!!body) {
            var username = body.username && body.username.toLowerCase();
            if (username === 'luke skywalker' && body.password === '19BBY') {
                req.session.userId = { name: body.username, isLoggedIn: true };
                isRegisteredUser = true;
            }
        }
        if (!isRegisteredUser) {
            res.status(500).send({ status: 500, message: 'Invalid Username or password', type: 'internal' });
        } else {
            res.send(req.session.userId);
        }
    });
    app.get('/logout', function (req, res) {
        delete req.session.userId;
        res.send(true);
    });

    app.listen(9000, function () {
        console.log('Listening on 9000 port');
    });
}());