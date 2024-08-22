const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagem = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");

function compileSass () {
    return gulp.src ("./src/estilo/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/css"))
}

function comprimeImagem () {
    return gulp.src ("./src/estilo/imagens/*")
    .pipe(imagem())
    .pipe(gulp.dest("./dist/css/imagens"))
}

function javaScript() {
    return gulp.src ("./src/modelo/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./dist/modelo"))
}

exports.default = gulp.series(compileSass);
exports.images = comprimeImagem;
exports.java = javaScript;