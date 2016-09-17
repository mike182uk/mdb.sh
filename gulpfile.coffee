browserSync  = require 'browser-sync'
childProcess = require 'child_process'
coffee       = require 'gulp-coffee'
execSync     = require('child_process').execSync
gulp         = require 'gulp'
plumber      = require 'gulp-plumber'
sass         = require 'gulp-sass'
util         = require 'gulp-util'

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

  jekyllArgs = ['build']
  jekyllArgs = jekyllArgs.concat ['--incremental', '--drafts'] if env == 'development'

  childProcess
    .spawn 'jekyll' , jekyllArgs, stdio: 'inherit'
    .on 'exit', (code) -> browserSync.notify 'jekyll build failed, check the terminal' if code isnt 0
    .on 'close', done

#
# Jekyll rebuild
#

gulp.task 'jekyll-rebuild', ['jekyll-build'], browserSync.reload

#
# Serve site with BrowserSync
#

gulp.task 'serve', ->
  port = 3000
  https = false
  openBrowser = true

  try
    execSync 'ps cax | grep "Google Chrome$"'
    existingBrowserTab = JSON.parse execSync "osascript utils/chrome/find-tab-by-url.applescript #{if https then "https" else "http"}://localhost:#{port}/"

    browserSync.emitter.on 'init', () ->
      execSync "osascript utils/chrome/activate-tab.applescript #{existingBrowserTab.window} #{existingBrowserTab.tab}",
        stdio: 'ignore'

    openBrowser = false
  catch err
    # noop

  browserSync
    port: port
    https: https
    open: openBrowser
    server: baseDir: '_site'

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
