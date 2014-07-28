angular-pubsub [ ![Codeship Status for tjlav5/angular-pubsub](https://www.codeship.io/projects/97c63600-f8b9-0131-b22c-4ee067ef6546/status)](https://www.codeship.io/projects/28741)
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