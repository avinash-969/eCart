var gulp = require('gulp')
var connect = require('gulp-connect')
var history = require('connect-history-api-fallback');
var config = require('../gulp.config')

// Running the server
gulp.task('deploy-dev', function () {
  connect.server({
    root: config.publicPath,
    port: config.port,
    // For fixing the html mod rewrite issue with refresh of the page
    middleware: function (connect, options) {
      return [
        history()
      ];
    }
  })
});
