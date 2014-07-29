module.exports = function () {

  this.$get = [
    function () {
      return require('./pubsub');
    }
  ];

};