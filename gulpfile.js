var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    stylish = require('jshint-stylish'),
    jshint = require('gulp-jshint'),
    w3cjs = require('gulp-w3cjs'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    path = require('path');

var env,
    jsSources,
    sassSources,
    htmlSources,
    outputDir,
    sassStyle;

env = 'development';

if (env==='development') {
  outputDir = 'builds/development/';
  sassStyle = 'nested';
} else {
  outputDir = 'builds/production/';
  sassStyle = 'compressed';
}

jsSources = [
	//'components/scripts/*.js'
	//'components/scripts/countdown.js',
	'components/scripts/jquery.js',
	'components/scripts/jquery-ui.min.js',
	'components/scripts/jquery.easing.js',
	'components/scripts/jquery.sticky.js',
	'components/scripts/flowtype.js',
	'components/scripts/responsiveslides.min.js',
	'components/scripts/jquery.multiselect.js',
	//'components/scripts/jquery.tinyscrollbar.js',
	'components/scripts/jquery.mCustomScrollbar.min.js',
	'components/scripts/script.js',
];
sassSources = ['components/sass/style.scss'];
htmlSources = [outputDir + '*.html'];

gulp.task('js', function() {
  'use strict';

  gulp.src('components/scripts/script.js')
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));

  gulp.src(jsSources)
    .pipe(concat('script.js'))
    /* .pipe(browserify()) */
    .on('error', gutil.log)
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(gulp.dest(outputDir + 'js'))
    .pipe(connect.reload());
});

gulp.task('compass', function() {
  'use strict';
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      css: outputDir + 'css',
      image: outputDir + 'images',
      style: sassStyle,
      require: ['susy', 'breakpoint', 'sassy-buttons'],
      debug: false,
      sourcemap: true
    })
    .on('error', gutil.log))
    .pipe(gulp.dest( outputDir + 'css'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  'use strict';
  gulp.watch(jsSources, ['js']);
  gulp.watch(['components/sass/*.scss', 'components/sass/*/*.scss'], ['compass']);
  gulp.watch('builds/development/*.html', ['html']);
});

gulp.task('connect', function() {
  'use strict';
  connect.server({
    root: outputDir,
    livereload: true
  });
});

gulp.task('html', function() {
  'use strict';
  gulp.src('builds/development/*.html')
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload());
});

// Copy images to production
gulp.task('move', function() {
  'use strict';
  gulp.src('builds/development/images/**/*.*')
  .pipe(gulpif(env === 'production', gulp.dest(outputDir+'images')));
  gulp.src('builds/development/css/images/**/*.*')
  .pipe(gulpif(env === 'production', gulp.dest(outputDir+'css/images')));
});

gulp.task('default', ['watch', 'html', 'js', 'compass', 'move', 'connect']);
