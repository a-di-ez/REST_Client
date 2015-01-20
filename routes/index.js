var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rest-client' });
});

router.post('/', function (req, resp,next) {

  console.log('url: ' + req.body.url + 'method: ' + req.body.method);

  var rc = require('rest-client');
  var method = req.body.method;
  switch(method) {
    case 'GET': {
      rc.send({
        url: req.body.url,
        method: method
      }, function (res){
        console.log(res.caseless);
        console.log(res.body);

        var s = res.caseless.dict;

        resp.render('index', {
          title: 'Rest-client',
          'date': s.date,
          server: s.server,
          'content_length': s['content-length'],
          'keep_alive': s['keep-alive'],
          connection: s.connection,
          'content_type': s['content-type'],
          'body': res.body
        });
      });
      break;
    }
    case 'POST': {
      rc.send({
        url: req.body.url,
        form: {
          a:1,
          b:2,
          c:3
        },
        method: method
      }, function (res, body){
        console.log(body);

        var s = res.caseless.dict;

        resp.render('index', {
          title: 'Rest-client',
          'date': s.date,
          server: s.server,
          'content_length': s['content-length'],
          'keep_alive': s['keep-alive'],
          connection: s.connection,
          'content_type': s['content-type'],
          'body': res.body
        });
      });
      break;
    }
    case 'DELETE': {
      resp.end('method delete done');
      break;
    }
    case 'PUT': {
      resp.end('method put done');
    }
    default: {
      resp.end('EROR');
    }
  }


});

module.exports = router;
