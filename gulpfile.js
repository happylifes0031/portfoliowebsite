var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
let cleanCSS = require('gulp-clean-css');


gulp.task('deploy', function() {
    var conn = ftp.create( {
        host:     'ftp.blijlevens.nu',
        user:     'happylifes@blijlevens.nu',
        password: 'w0G26RuI',
        parallel: 3,
        log:      gutil.log
    } );
    /* list all files you wish to ftp in the glob variable */
    var globs = [
        '**/*',
        '*',
        '!node_modules/**' // if you wish to exclude directories, start the item with an !
    ];
    return gulp.src( globs, { base: '.', buffer: false } )
        .pipe( conn.newer( 'domains/blijlevens.nu/public_html/' ) ) // only upload newer files
        .pipe( conn.dest( 'domains/blijlevens.nu/public_html/' ) )
        .pipe( notify("Dev site updated!"));
});

gulp.task('default', function () {
    gulp.watch(['*', '**/*'], ['deploy-dev']);
});

gulp.task('imagemin', () => {
    return gulp.src(['img/*', 'img/**', '!img/{optimized,optimized/**}'])
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [imageminPngquant()]
    }))
    .pipe(imagemin([
        imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('img/optimized'));
});

gulp.task('minify-css', () => {
    return gulp.src('./css/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(rename({
        suffix: '.min'
    }))
      .pipe(gulp.dest('./css'));
  });

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'imagemin', 'minify-css'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(["img/*", "!img/{optimized,optimized/**}"], ['imagemin']);
    gulp.watch("./css", ['minify-css'])
    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
