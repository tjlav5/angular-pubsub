angular-pubsub
===
[![NPM version](http://img.shields.io/npm/v/angular-pubsub.svg?style=flat)](https://www.npmjs.org/package/angular-pubsub) [![Build Status](http://img.shields.io/travis/tjlav5/angular-pubsub.svg?style=flat)](https://travis-ci.org/tjlav5/angular-pubsub) [![Coverage Status](http://img.shields.io/coveralls/tjlav5/angular-pubsub.svg?style=flat)](https://coveralls.io/r/tjlav5/angular-pubsub) [![Dependencies](http://img.shields.io/david/tjlav5/angular-pubsub.svg?style=flat)](https://www.npmjs.org/package/angular-pubsub) [![Downloads](http://img.shields.io/npm/dm/angular-pubsub.svg?style=flat)](https://www.npmjs.org/package/angular-pubsub)
---

A publisher/subscribers service for AngularJS.

> Currently relies on browserify.
  Roadmap will include a built file that can be loaded in an index
  and injected into an angular app without this requirement.

Example Usage
---

***app.js***

```javascript
var myApp = angular.module('myApp', [])
          .provider('PubSub', require('angular-pubsub'));
```

***greetingController.js***

```javascript
myApp.controller('GreetingController', ['$scope', 'PubSub', function($scope, PubSub) {

  var greet = function (newGreeting, oldGreeting) {
    $scope.greeting = newGreeting;
    // first run  --> newGreeting = 'Hello', oldGreeting = undefined
    // second run --> newGreeting = 'World', oldGreeting = 'Hello'
  };

  var uid = PubSub.subscribe('greeting', greet);

  $scope.$on('$destory', function () {
    PubSub.unsubscribe(uid);
  });

}]);
```

***loginController.js***

```javascript
myApp.controller('HelloController', ['$scope', 'PubSub', function($scope, PubSub) {

  PubSub.publish('greeting', 'Hello');
  PubSub.publish('greeting', 'World');

}]);
```
