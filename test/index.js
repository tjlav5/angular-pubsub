var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    istanbul = require('gulp-istanbul'),
    coveralls = require('gulp-coveralls');

gulp.src(['pubsub.js'])
  .pipe(istanbul()) // Covering files
  .on('finish', function () {
    gulp.src(['test/pubsub.js'])
      .pipe(mocha())
      .pipe(istanbul.writeReports()) // Creating the reports after tests runned
      .on('end', function () {
        gulp.src('coverage/lcov.info')
          .pipe(coveralls());
      });
  });

// gulp.src('./test/pubsub.js', {read: false})
//   .pipe(mocha({reporter: 'mocha-lcov-reporter'}));

// var mocha = require('mocha');

// var testCase = require('mocha').describe
// var pre = require('mocha').before
// var assertions = require('mocha').assertions
// var assert = require('assert')

// testCase('Array', function(){
//   pre(function(){
//     // ...
//   });

//   testCase('#indexOf()', function(){
//     assertions('should return -1 when not present', function(){
//       assert.equal([1,2,3].indexOf(4), -1);
//     });
//   });
// });

// var assert = require("assert")
// describe('Array', function(){
//   describe('#indexOf()', function(){
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(5));
//       assert.equal(-1, [1,2,3].indexOf(0));
//     })
//   })
// });

// var path = require('path');

// var pubsub = require('.././pubsub');


// var PubSub = new pubsub({
//   debug: true
// });

// PubSub.subscribe('testEvent', function (newData, oldData) {
//   console.log(newData, oldData);
// });

// var evt2 = PubSub.subscribe('testEvent', function (newData, oldData) {
//   console.log(newData, oldData, 'asdfasdfs');
// });

// PubSub.publish('testEvent', 'hello');
// PubSub.publish('testEvent', 'world');

// PubSub.unsubscribe(evt2);

// PubSub.publish('testEvent', 'prime');