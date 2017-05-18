/*
 * gulpfile.js
 * =============================================================================
 * This file is responsible for building the application structure based on the
 * configurations set below.
 *
 * The default task is mapped to run the watch task
 */
var fs = require('fs')
var path = require('path')
var gulp = require('gulp')
var concat = require('gulp-concat')
var config = require('./gulp/gulp.config')

// Production check flag
global.isProd = false;

// Only gets the js files
const tasks = fs.readdirSync('./gulp/tasks/').filter(function(name) {
  return /(\.(js)$)/i.test(path.extname(name));
});

/**
 * Import all the gulp tasks present in the gulp/tasks folder
 * Add new tasks that you need to execute under gulp/tasks folder and
 * the configurations for those can be added inside the gulp.config.js file
 *
 * @param  {[type]} (task [description]
 * @return {[type]}       [description]
 */
tasks.forEach((task) => {
  // Grabs all the tasks from the tasks folder
  require(config.tasksDir + task);
});

// Watch for tasks that are liable to changes
gulp.task('watch', function() {
  // Watches for changes in js files and runs the browserify task
  gulp.watch([
    // Watch for changes under the js folder
    config.sourceScriptsDir + '/**/*.js',
    // Watch for changes under the js sub folders
    config.sourceScriptsDir + '/**/**/*.js'],
    ['browserify']);

  // Watches for changes in the template files and runs the templates task
  gulp.watch(config.sourceScriptsDir + '/**/**/*.html', ['templates']);

  // Watches for changes in style.scss and runs the scss task
  gulp.watch([
    // Watch for changes of sccs files under the styles folder
    config.sourceStylesDir + '/*.scss',
    // Watch for changes of sccs files under the styles sub folder
    config.sourceStylesDir + '/**/*.scss'],
    ['scss']);
});

// Default task for gulp
gulp.task('default', ['deploy-dev', 'browserify', 'templates', 'bower', 'icons',
'images', 'scss', 'css', 'js-vendor', 'watch']);
