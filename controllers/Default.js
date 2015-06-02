'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.conversationsGet = function conversationsGet (req, res, next) {
  var tag = req.swagger.params['tag'].value;
  

  var result = Default.conversationsGet(tag);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
