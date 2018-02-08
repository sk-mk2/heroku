const gulp = require("gulp");
const typescript = require("gulp-typescript");

gulp.task("default",()=>{

    gulp.src([
            "./**/*.ts",
            "!./node_modules/**"
    ])
        .pipe(typescript())
        .pipe(gulp.dest("./built"))
});

