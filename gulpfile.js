const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// 🔹 Compilar SASS
function compilaSass() {
    return src('./source/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('./dist/css'));
}

// 🔹 Minificar JavaScript
function minificaJS() {
    return src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(dest('./dist/js'));
}

// 🔹 Comprimir imagens
function comprimeImagens() {
    return src('./source/images/*')
        .pipe(imagemin())
        .pipe(dest('./dist/images'));
}

// 🔹 Tarefa padrão
exports.default = series(compilaSass, minificaJS, comprimeImagens);