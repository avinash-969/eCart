/*
 * gulp.config.js
 * =============================================================================
 * This file is responsible for providing configurations to gulp process.
 *
 */
var config = {
    /* Port for starting the app on */
    port : 4000,
    /* Public root files location */
    publicPath : 'public',
    tasksDir : './gulp/tasks/',
    app : './app/js/app.js',
    appFileName : 'main.js',
    bowerDir: './bower_components',
    nodeDir : './node_modules',
    //sassPath: './app/styles',
    sourceScriptsDir : './app/js',
    /* For Sass files only **/
    sourceStylesDir : './app/styles/scss',
    targetScriptsDir: './public/js/',
    targetStylesDir: './public/css/'
};

// Export the module
module.exports = config;
