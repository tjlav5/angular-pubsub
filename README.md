angular-pubsub [ ![Codeship Status for tjlav5/angular-pubsub](https://www.codeship.io/projects/97c63600-f8b9-0131-b22c-4ee067ef6546/status)](https://www.codeship.io/projects/28741)
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
