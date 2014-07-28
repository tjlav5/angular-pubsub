angular-pubsub [![Build Status](https://travis-ci.org/tjlav5/angular-pubsub.svg?branch=master)](https://travis-ci.org/tjlav5/angular-pubsub)
==============

A publisher/subscribers service for AngularJS.

Example
---

```javascript
var uid = PubSub.subscribe('scopeChange', foo);

PubSub.publish('scopeChange', {account: 123, name: "Bklyn"});

$scope.$on('$destory', function () {
  PubSub.unsubscribe(uid);
});
```