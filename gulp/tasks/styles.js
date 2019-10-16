const gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins'),
  nested = require('postcss-nested'),
  cssvars = require('postcss-simple-vars'),
  hexrgba = require('postcss-hexrgba'),
  autoprefixer = require('autoprefixer');
  
  function style() {
    return gulp
      // access original file
      .src("./app/assets/styles/styles.css")
      // pass the main file through the compilers
      .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
      // account for any errors
      .on("error", function(errorInfo) {
        console.log(errorInfo.toString());
        this.emit("end");
      })
      // tells the server where the newly compiled file should go
      .pipe(gulp.dest("./app/temp/styles"));
  }

  exports.style = style;
