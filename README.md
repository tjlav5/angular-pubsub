[![Build Status](https://travis-ci.org/tjlav5/angular-pubsub.svg?branch=master)](https://travis-ci.org/tjlav5/angular-pubsub) [![Coverage Status](https://coveralls.io/repos/tjlav5/angular-pubsub/badge.png)](https://coveralls.io/r/tjlav5/angular-pubsub) [![Dependencies](https://david-dm.org/tjlav5/angular-pubsub.png)](#)
==============

A publisher/subscribers service for AngularJS.

Example
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
