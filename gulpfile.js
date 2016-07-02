const browserSync = require('browser-sync')
const childProcess = require('child_process')
const gulp = require('gulp')
const sass = require('gulp-sass')

/**
 * Process SASS
 */

gulp.task('sass', () => {
  return gulp.src('./resources/_sass/**/*.scss')
     .pipe(sass())
     .on('error', function(err) {
        browserSync.notify('Sass compilation failed, check the terminal')

        sass.logError.call(this, err)
      })
     .pipe(gulp.dest('./resources/stylesheets'))
     .pipe(gulp.dest('./_site/resources/stylesheets'))
     .pipe(browserSync.reload({ stream: true }))
})

/**
 * Jekyll build
 */

gulp.task('jekyll-build', done => {
  browserSync.notify('Running jekyll build');

  return childProcess
    .spawn('jekyll' , ['build', '--incremental'], { stdio: 'inherit' })
    .on('exit', code => {
      if (code !== 0) browserSync.notify('jekyll build failed, check the terminal')
    })
    .on('close', done)
})

/**
 * Jekyll rebuild
 */

gulp.task('jekyll-rebuild', ['jekyll-build'], () => browserSync.reload())

/**
 * Serve site with BrowserSync
 */

gulp.task('serve', () => {
  browserSync({
    server: {
      baseDir: '_site'
    }
  })
})

/**
 * Watchers
 */

gulp.task('watch', () => {
  gulp.watch('./resources/_sass/**/*.scss', ['sass']);
  gulp.watch(['*.html', '*.md', '_layouts/**/*', '_includes/**/*', '_posts/*', '_config.yml'], ['jekyll-rebuild'])
});

/**
 * Build the project
 */

gulp.task('build', ['jekyll-build', 'sass'])

/**
 * Default
 */

gulp.task('default', ['build', 'serve', 'watch'])
