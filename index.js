var pubsub = require('./pubsub');

module.exports = function () {

  this.$get = [
    function () {
      return new pubsub();
    }
  ];

};

// module.exports = function () {

//   var scope = {},
//       _subscribers = {};

//   var set = function (newScope) {
//     lodash.mapValues(_subscribers, function(callback) { 
//       callback(newScope, scope); 
//     });
//     scope = newScope;
//   };

//   var get = function () {
//     return scope;
//   };

//   var subscribe = function (callback) {
//     var uniqueId = lodash.uniqueId('scopeChange_');
//     _subscribers[uniqueId] = callback;
//     return uniqueId;
//   };

//   var unsubscribe = function (uniqueId) {
//     // delete _subscribers[uniqueId];
//   };

//   this.$get = [
//     function () {
//       return {
//         set: set,
//         subscribe: subscribe,
//         get: get,
//         unsubscribe: unsubscribe
//       };
//     }
//   ];
// };