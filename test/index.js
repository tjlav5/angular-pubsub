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