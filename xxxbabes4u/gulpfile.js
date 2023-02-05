const {src, dest, watch, series} = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass')(require('sass')),
  csso = require('gulp-csso'),
  include = require('gulp-file-include'),
  htmlmin = require('gulp-htmlmin'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  rimraf = require('gulp-rimraf'),
  sync = require('browser-sync').create();

const paths = {
  build: {
    html: 'dist/',
    js: 'dist/js/',
    css: 'dist/css/',
    img: 'dist/images/',
    fonts: 'dist/fonts/'
  },
  src: {
    html: 'src/**.html',
    js: 'src/js/**.js',
    css: 'src/scss/**.scss',
    img: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    css: 'src/scss/**/*.scss',
    img: 'src/images/**/*.*',
    fonts: 'srs/fonts/**/*.*'
  },
  root: './dist'
};

function templates() {
  return src(paths.src.html)
    .pipe(plumber())
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(dest(paths.build.html));
}

function styles () {
  return src(paths.src.css)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 4 versions']
    }))
    .pipe(csso())
    .pipe(concat('style.min.css'))
    .pipe(dest(paths.build.css));
}

function scripts() {
  return src(paths.src.js)
    .pipe(plumber())
    .pipe(uglify({
      mangle: true,
      output: {
        beautify: false,
        comments: false
      }
    }))
    .pipe(dest(paths.build.js));
}

function images() {
  return src(paths.src.img)
    .pipe(dest(paths.build.img));
}

function fonts() {
  return src(paths.src.fonts)
    .pipe(dest(paths.build.fonts));
}

function clear() {
  return src(paths.root, {read: false})
    .pipe(rimraf());
}

function serve() {
  sync.init({
    server: paths.root
  })

  watch(paths.watch.html, series(templates)).on('change', sync.reload);
  watch(paths.watch.css, series(styles)).on('change', sync.reload);
  watch(paths.watch.js, series(scripts)).on('change', sync.reload);
  watch(paths.watch.img, series(images)).on('change', sync.reload);
}


exports.build = series(clear, styles, templates, scripts, images, fonts);
exports.serve = series(clear, styles, templates, scripts, images, fonts, serve);