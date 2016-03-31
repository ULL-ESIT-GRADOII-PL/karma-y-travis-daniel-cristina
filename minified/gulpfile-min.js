var gulp=require("gulp"),minify=require("gulp-minify"),cleanCSS=require("gulp-clean-css"),htmlmin=require("gulp-htmlmin"),clean=require("gulp-clean"),karma=require("gulp-karma");gulp.task("default",["minify-js","minify-css","minify-html"],function(){gulp.src([]).pipe(karma({configFile:"karma.conf.js",action:"watch"}))}),gulp.task("test",function(){return gulp.src([]).pipe(karma({configFile:"karma.conf.js",action:"run"})).on("error",function(i){throw i})}),gulp.task("minify-js",function(){gulp.src(["vendor/*.js","*.js","assets/js/*.js"]).pipe(minify({exclude:["tasks"],ignoreFiles:[".combo.js","-min.js"]})).pipe(gulp.dest("minified"))}),gulp.task("minify-css",function(){return gulp.src(["assets/css/*.css","vendor/*.css"]).pipe(cleanCSS({compatibility:"ie8"})).pipe(gulp.dest("minified"))}),gulp.task("minify-html",function(){return gulp.src("*.html").pipe(htmlmin({collapseWhitespace:!0})).pipe(gulp.dest("minified"))}),gulp.task("clean",function(){return gulp.src("minified/*",{read:!1}).pipe(clean())});