var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref      = require('gulp-useref'),
    uglify      = require('gulp-uglify'),
    gulpIf      = require('gulp-if'),
    cssNano     = require('gulp-cssnano'),
    imageMin    = require('gulp-imagemin'),
    cache       = require('gulp-cache'),
    del         = require('del'),
    runSequence = require('run-sequence');


base_url = {
    src: 'src/',
    dist: 'dist/'
}

// welcome message 
gulp.task('welcome', function () {
    return console.log("Welcome to the Gulp");
});

// browser sync
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    })
});

// sass compile function
gulp.task('compile', function () {
    gulp.src(base_url.src + 'sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(base_url.src + 'css/'))
        .pipe(browserSync.reload({
            stream: true
          }));
});

gulp.task('useref', function () {
    return gulp.src(base_url.src + '*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssNano()))
        .pipe(gulp.dest(base_url.dist));
});

// image compress
gulp.task('imageCompress', function(){
    gulp.src(base_url.src + 'images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imageMin({interlaced: true})))
        .pipe(gulp.dest(base_url.dist + 'images/'));
});

//Copy fonts
gulp.task('fonts', function() {
    return gulp.src(base_url.src + '/fonts/**/*')
    .pipe(gulp.dest(base_url.dist + 'fonts'))
});

// Clean dist folder
gulp.task('cache:clear', function () {
    return cache.clearAll();
})

// Delete dist folder
gulp.task('clean:dist', function() {
    return del.sync('dist');
})

// watch function for auto compile sass file when any change found in sass
gulp.task('watch',['browserSync', 'compile', 'useref', 'imageCompress', 'fonts'], function () {
    gulp.watch(base_url.src + 'sass/**/*.scss', ['compile']);
    gulp.watch(base_url.src + '*.html', browserSync.reload);
    gulp.watch(base_url.src + 'js/**/*.js', browserSync.reload);
});
/* gulp.task('build', [`clean:dist`, `compile`, `useref`, `imageCompress`, `fonts`], function (){
    console.log('Building files');
}); */

// Create build task
gulp.task('build', function(){
    runSequence('clean:dist', ['compile', 'useref', 'imageCompress', 'fonts']);
});

// create default task
gulp.task('default', function(){
    runSequence(['compile','browserSync', 'watch']);
});