import gulp from "gulp";
import del from "del";

gulp.task("deleteImages", function() {
	return del("./public/build/images");
})

gulp.task("images", ["deleteImages"], function() {
	return gulp.src("./src/client/images/**/*{svg,png,jpg,jpeg}")
					.pipe(gulp.dest("./public/build/images"))
})
