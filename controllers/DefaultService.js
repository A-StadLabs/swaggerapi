'use strict';

exports.conversationsGet = function(tag) {

  var examples = {};
  
  examples['application/json'] = [ {
  "owner" : 1.3579000000000001069366817318950779736042022705078125,
  "parent" : 1.3579000000000001069366817318950779736042022705078125,
  "id" : 1.3579000000000001069366817318950779736042022705078125,
  "tag" : {
    "name" : "aeiou",
    "id" : 123456789
  },
  "title" : "aeiou",
  "postdata" : 1.3579000000000001069366817318950779736042022705078125
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
