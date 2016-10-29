browserSync         = require('browser-sync').create()
browserSyncReuseTab = require('browser-sync-reuse-tab')(browserSync)
childProcess        = require 'child_process'
coffee              = require 'gulp-coffee'
execSync            = require('child_process').execSync
gulp                = require 'gulp'
plumber             = require 'gulp-plumber'
sass                = require 'gulp-sass'
util                = require 'gulp-util'

env = process.env.NODE_ENV || 'development'

#
# Process SASS
#

gulp.task 'sass', ->
  gulp.src('./resources/_sass/**/*.scss')
    .pipe sass()
    .on 'error', (err) ->
      browserSync.notify 'Sass compilation failed, check the terminal'

      sass.logError.call this, err
    .pipe gulp.dest './resources/stylesheets'
    .pipe gulp.dest './_site/resources/stylesheets'
    .pipe browserSync.reload stream: true

#
# Process CoffeeScript
#

gulp.task 'coffee', ->
  gulp.src './resources/_coffee/**/*.coffee'
    .pipe plumber()
    .pipe(
      coffee(bare: true).on 'error', (err) ->
       browserSync.notify 'CoffeeScript compilation failed, check the terminal'

       util.log err
    )
    .pipe gulp.dest './resources/scripts'
    .pipe gulp.dest './_site/resources/scripts'
    .pipe browserSync.reload stream: true

#
# Jekyll build
#

gulp.task 'jekyll-build', (done) ->
  browserSync.notify 'Running jekyll build'

  jekyllArgs = ['exec', 'jekyll', 'build']
  jekyllArgs = jekyllArgs.concat ['--incremental', '--drafts'] if env == 'development'

  childProcess
    .spawn 'bundle' , jekyllArgs, stdio: 'inherit'
    .on 'exit', (code) -> browserSync.notify 'jekyll build failed, check the terminal' if code isnt 0
    .on 'close', done

#
# Jekyll rebuild
#

gulp.task 'jekyll-rebuild', ['jekyll-build'], () -> browserSync.reload()

#
# Serve site with BrowserSync
#

gulp.task 'serve', ->
  browserSync.init
    server:
      baseDir: '_site'
    open: false
  , browserSyncReuseTab

#
# Watchers
#

gulp.task 'watch', ->
  gulp.watch './resources/_sass/**/*.scss', ['sass']
  gulp.watch './resources/_coffee/**/*.coffee', ['coffee']
  gulp.watch [
    '*.html'
    '*.md'
    '_layouts/**/*'
    '_includes/**/*'
    '_posts/*'
    '_drafts/*'
    '_config.yml'
  ], ['jekyll-rebuild']

#
# Build the project
#

gulp.task 'build', [
  'jekyll-build'
  'sass'
  'coffee'
]

#
# Default
#

gulp.task 'default', [
  'build'
  'serve'
  'watch'
]
