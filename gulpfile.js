var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var htmlmin = require('gulp-htmlmin');
var smoosher = require('gulp-smoosher');
var cssmin = require('gulp-cssmin');
var es = require('event-stream');
var htmlbuild = require('gulp-htmlbuild');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');
var closureCompiler = require('gulp-closure-compiler');

var gulpSrc = function (opts) {
  var paths = es.through();
  var files = es.through();

  paths.pipe(es.writeArray(function (err, srcs) {

    gulp.src(srcs, { cwd: 'app' }).pipe(files);

  }));

  return es.duplex(paths, files);
};

var jsBuild = es.pipeline(
  concat('min.js'),
  uglify(),
  gulp.dest('./dist')
);

var cssBuild = es.pipeline(
  concat('min.css'),
  cssmin(),
  gulp.dest('./dist')
);

gulp.task('index', function(cb) {

   del(['./dist/*'], cb);

   gulp.src(['./app/index.html'])
    .pipe(htmlbuild({

      js: htmlbuild.preprocess.js(function (block) {

        block.pipe(gulpSrc())
          .pipe(jsBuild);

        block.end('min.js');

      }),

      css: htmlbuild.preprocess.css(function (block) {

        block.pipe(gulpSrc())
          .pipe(cssBuild);

        block.end('min.css');

      }),

      remove: function (block) {
        block.end();
      }
    }))
    .pipe(gulp.dest('./dist'));

});

gulp.task('smoosher', function (cb) {

 return gulp.src('./dist/index.html')
  .pipe(smoosher())
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeAttributeQuotes: true,
    removeComments: true,
  }))
  .pipe(gulp.dest('./dist'));

});

gulp.task('images', function () {
    return gulp.src('app/images/*.{png,jpg}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('clean', function(cb) {

  del(['./dist/min.css', './dist/min.js'], cb);

});

gulp.task('closureCompiler', function() {

  return gulp.src('dist/min.js')
    .pipe(closureCompiler({
    compilerPath: 'bower_components/closure-compiler/compiler.jar',
    fileName: 'min.js',
    compilerFlags: {
      compilation_level: 'ADVANCED_OPTIMIZATIONS',
    }
  }))
    .pipe(gulp.dest('dist'));
})

gulp.task('default', function () {

  runSequence('index', 'images', 'closureCompiler', 'smoosher', 'clean');

});

gulp.task('watch', function() {

  livereload.listen();

  gulp.watch(['app/**']).on('change', livereload.changed);

});