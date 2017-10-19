var argv = require("yargs").argv,
    stripDebug = require('gulp-strip-debug'),//删除代码中的console.log
    gulp = require('gulp'),//gulp插件
    uglify = require('gulp-uglify'),//混淆js
    clean = require('gulp-clean'),//清理文件
    less = require('gulp-less'),//转换less用的
    autoprefixer = require('gulp-autoprefixer'),//增加私有变量前缀
    minifycss = require('gulp-minify-css'),//压缩
    concat = require('gulp-concat'),//合并
    template = require('gulp-template'),//替换变量以及动态html用
    rename = require('gulp-rename'),//重命名
    imagemin = require('gulp-imagemin'),//图片压缩
    rev  = require('gulp-rev'),//加MD5后缀
    jshint = require('gulp-jshint'),//js校验
    jade = require('gulp-jade'),
    nodemon = require('gulp-nodemon'),
    $ = require('gulp-load-plugins')(),
    spriter = require('gulp-css-spriter'),
    map = require("map-stream"),
    co = require('co'),
    debug = require('debug')('node-sso:gulpfile');
    jsdoc = require('gulp-jsdoc3');



gulp.task('doc', function (cb) {
    gulp.src(['README.md', './components/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});

/* custome Reporter by jshint */
var customerReporter = map(function(file,cb){
    if(!file.jshint.success){
        //打印出错误信息
        console.log("jshint fail in:" + file.path);
        file.jshint.results.forEach(function(err){
            if(err){
                console.log(err);
                console.log("在 "+file.path+" 文件的第"+err.error.line+" 行的第"+err.error.character+" 列发生错误");
            }
        });
    }
});


/* clear all auto files,include every env */
gulp.task('cleanAll',function(){
    gulp.src(['dist/*'],{read:false})
        .pipe(clean());
});

/* jshint */
gulp.task('jshint', function(){
    return gulp.src(['./components/**/*.js','./bin/**/*.js','./public/javascripts/**/*.js'
        , './routes/**/*.js','./app.js'
    ])
        .pipe($.jshint())
        //.pipe($.jshint.reporter('jshint-stylish'))
        //.pipe($.jshint.reporter('fail'));
        .pipe(customerReporter);
});



