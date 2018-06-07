'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const del = require('del');
const imgmin = require('imagemin-pngquant');
const cache = require('gulp-cache');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
    return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    .pipe(autoprefixer(
        [
            'last 15 versions',
            '> 1 %',
            'ie 8',
            'ie 7'
        ],
        {
            cascade: true
        }
    ))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload(
        {
            stream: true
        }
    ))
});//sass