var autoprefixer = require('gulp-autoprefixer');
var packageJson = require('./package.json');
var browserSync = require('browser-sync');
var stylus = require('gulp-stylus');
var locals = require('./locals');
var jade = require('gulp-jade');
var gulp = require('gulp');

var config = {
  server: {
    files: ['build/**/*.html', 'build/**/*.js', 'build/**/*.css'],
    port: process.env.PORT || 3000,
    reloadOnRestart: false,
    logFileChanges: false,
    ghostMode: false,
    server: 'build',
    open: false,
    ui: false
  },
  jade: {
    src: 'src/**/*.jade',
    watch: ['src/**/*.jade', 'src/css/critical.styl'],
    dest: 'build'
  },
  stylus: {
    src: ['src/css/app.styl', 'src/css/critical.styl'],
    watch: 'src/css/**/*.styl',
    dest: 'build/css/'
  }
};

//- Add in the version to Jade locals
locals.version = packageJson.version;

gulp.task('jade', function () {
  return gulp.src(config.jade.src)
    .pipe(jade({ locals: locals }))
    .pipe(gulp.dest(config.jade.dest));
});

gulp.task('stylus', function () {
  return gulp.src(config.stylus.src)
    .pipe(stylus({ linenos: true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.stylus.dest));
});

gulp.task('watch', function () {
  gulp.watch(config.jade.watch, ['jade']);
  gulp.watch(config.stylus.watch, ['stylus']);
});

gulp.task('build', ['watch', 'jade', 'stylus']);
gulp.task('serve', function () { browserSync(config.server); });
