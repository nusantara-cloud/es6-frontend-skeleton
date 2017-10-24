var fs = require('fs')
var uglifyify = require('uglifyify')
var browserify = require('browserify')
browserify('./main.js')
  .transform('babelify', {presets: ['es2015']})
  .transform('uglifyify', {global: true})
  .transform({global: true}, 'browserify-shim')
  .bundle()
  .pipe(fs.createWriteStream('dist/bundle.js'))
