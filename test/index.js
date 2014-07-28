var path = require('path');

var pubsub = require('.././pubsub');


var PubSub = new pubsub({
  debug: true
});

PubSub.subscribe('testEvent', function (newData, oldData) {
  console.log(newData, oldData);
});

var evt2 = PubSub.subscribe('testEvent', function (newData, oldData) {
  console.log(newData, oldData, 'asdfasdfs');
});

PubSub.publish('testEvent', 'hello');
PubSub.publish('testEvent', 'world');

PubSub.unsubscribe(evt2);

PubSub.publish('testEvent', 'prime');