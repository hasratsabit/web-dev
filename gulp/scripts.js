import gulp from "gulp";
import webpack from "webpack";
import chalk from "chalk";
import del from "del";
import util from "util";
import nodemon from "gulp-nodemon";
import {create as createServerConfig} from "../webpack.server";
import { create as createClientConfig } from "../webpack.client";

const $ = require("gulp-load-plugins")();

/*---------------
	DELETE TASKS
----------------*/
gulp.task("cleanServer", () => {
	return del("./server");
});

gulp.task("cleanPublic", () => {
	return del("./public");
});

gulp.task("buildServer", ["cleanServer", "cleanPublic"], buildDevServer)
gulp.task("watchServer", ["buildServer"], watchDevServer)
gulp.task("dev", ["watchServer"], reloadDevServer);

// Only production
gulp.task("buildClientProd", ["cleanServer", "cleanPublic"], buildProdClient)
gulp.task("prod", ["buildClientProd"], buildProdServer)



function buildProdClient(callback) {
const compiler = webpack(createClientConfig(false));
	compiler.run((error, stats) => {
		outputWebpack("ProdClient", error, stats)
		callback();
	})
}

/*---------------
	Server Webpack
----------------*/
const devServerWebpack = webpack(createServerConfig(true));
const prodServerWebpack = webpack(createServerConfig(false));

// Building development server
function buildDevServer(callback) {
	devServerWebpack.run((error, stats) => {
		outputWebpack("Building:Server", error, stats);
		callback();
	});
}

// Watching development server
function watchDevServer() {
	devServerWebpack.watch({}, (error, stats) => {
		outputWebpack("Watching:Server", error, stats)
	});
}

// nodemon setup
function reloadDevServer() {
	return $.nodemon({
		script: "./server/server.js",
		watch: "./server",
		env: {
			"NODE_ENV": "development",
			"USE_WEBPACK": "true"
		}
	})
}


// Building production server
function buildProdServer(callback) {
	prodServerWebpack.run((error, stats) => {
		outputWebpack("ProdServer", error, stats)
		callback();
	});
}

/*---------------
	ERROR HANDLING
----------------*/
function outputWebpack(label, error, stats) {
	if (error)
		throw new Error(error);

	if (stats.hasErrors()) {
		util.log(stats.toString({ colors: true }));
	} else {
		const time = stats.endTime - stats.startTime;
		util.log(chalk.bgGreen(`${label} in ${time} ms`))
	}
}
