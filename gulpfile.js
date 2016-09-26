var gulp = require("gulp");
var less=require("gulp-less");
var clean=require("gulp-clean-css")
var uglify=require("gulp-uglify")

gulp.task("less",function(){
	return gulp.src("src/style/*.less")
	.pipe(less())
	.pipe(gulp.dest("dist/style"))
})
gulp.task("clean",function(){
	return gulp.src("src/style/*.css")
	.pipe(clean())
	.pipe(gulp.dest("dist/style"))
})
gulp.task("uglify",function(){
	return gulp.src("src/script/*js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/script"))
})
gulp.task("watch",function(){
	gulp.watch("src/style/*.less",["less"])
	gulp.watch("src/style/*.css",["clean"])
	gulp.watch("src/script/*.js",["uglify"])
})
gulp.task("default",["less","clean","uglify","watch"])