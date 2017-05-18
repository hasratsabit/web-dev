/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(0);
var router = express.Router();

var TestifyRoute = __webpack_require__(16);
var ServiceRoute = __webpack_require__(15);

router.get("/", function (req, res) {
	res.render("index", { title: "ZELA" });
});

router.use("/services", ServiceRoute);
router.use("/testimonials", TestifyRoute);

module.exports = router;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(2);
var webpack = __webpack_require__(3);
var ExtractTextPlugin = __webpack_require__(19);
var dirname = path.resolve("./");
function createClientConfig(isDebug) {
	var devTool = isDebug ? "eval-source-map" : "source-map";
	var cssIdentifier = isDebug ? '[path][name]---[local]' : '[hash:base64:10]';
	var cssLoader = { test: /\.css$/, loader: ["style-loader", "css-loader?localIdentName=" + cssIdentifier] };
	var sassLoader = { test: /\.scss$/, loader: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] };
	var appEntry = ["./src/client/scripts/main.js"];
	var plugins = [new webpack.LoaderOptionsPlugin({
		options: {
			postcss: function postcss() {
				return [
				// require("postcss-mixins"),
				__webpack_require__(18)
				// require("postcss-simple-vars"),
				// require("postcss-nested")
				];
			}
		}
	})];

	if (!isDebug) {
		plugins.push(new webpack.optimize.UglifyJsPlugin());
		plugins.push(new ExtractTextPlugin("[name]-[contenthash:10].css"));

		cssLoader.loader = ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader?minimize&localIdentName=" + cssIdentifier] });
		sassLoader.loader = ExtractTextPlugin.extract({ fallback: "style-loader", use: ["css-loader", "sass-loader"] });
	} else {
		plugins.push(new webpack.HotModuleReplacementPlugin());
		appEntry.splice(0, 0, "webpack-hot-middleware/client");
	}

	return {
		devtool: devTool,
		entry: {
			main: appEntry
		},
		output: {
			path: path.join(dirname, "public", "build"),
			publicPath: "/build/",
			filename: isDebug ? "bundle.js" : "bundle.[hash:12].min.js"
		},
		module: {
			loaders: [{ test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }, { test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)/, loader: "url-loader?limit=1024" }, cssLoader, sassLoader]
		},
		plugins: plugins
	};
}

module.exports = createClientConfig(true);
module.exports.create = createClientConfig;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express-handlebars");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
	icon: { type: String, required: true },
	title: { type: String, required: true },
	content: { type: String, required: true }
});

module.exports = mongoose.model("Service", ServiceSchema);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var TestimonialsSchema = new Schema({
	imagePath: { type: String, required: true },
	name: { type: String, required: true },
	comment: { type: String, required: true }
});

module.exports = mongoose.model("testimonial", TestimonialsSchema);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var express = __webpack_require__(0);
var router = express.Router();
var Services = __webpack_require__(13);

router.get("/", function (req, res, next) {
	Services.find(function (err, ServiceData) {
		if (err) {
			throw err;
		} else {
			res.send(ServiceData);
		}
	});
});

router.post("/", function (req, res) {
	var Service = new Services();
	Service.icon = req.body.icon, Service.title = req.body.title, Service.content = req.body.content;
	Service.save(function (err, ServiceData) {
		if (err) {
			throw err;
		} else {
			res.json(ServiceData);
		}
	});
});

module.exports = router;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(0);
var UserTestify = __webpack_require__(14);
var router = express.Router();

router.get("/", function (req, res) {
	Testify.find(function (err, data) {
		res.render("index", { data: data });
	});
});

router.post("/", function (req, res) {
	var Testify = new UserTestify();
	Testify.imagePath = req.body.imagePath, Testify.name = req.body.name, Testify.comment = req.body.comment;
	Testify.save(function (err, data) {
		if (err) {
			throw err;
		} else {
			res.json(data);
		}
	});
});

module.exports = router;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(0);
var path = __webpack_require__(2);
var mongoose = __webpack_require__(1);
var bodyParser = __webpack_require__(6);
var exphbs = __webpack_require__(8);
var index = __webpack_require__(4);
var chalk = __webpack_require__(7);
var socketIo = __webpack_require__(10);
var http = __webpack_require__(9);

var app = express();
var server = new http.Server(app);
var io = socketIo(server);

// Database
mongoose.connect("mongodb://hasratsabit:1234@ds143141.mlab.com:43141/zela");
mongoose.Promise = global.Promise;

// Client Webpack
if (process.env.USE_WEBPACK === "true") {
	var webpackMiddleware = __webpack_require__(11),
	    webpackHotMiddlware = __webpack_require__(12),
	    webpack = __webpack_require__(3),
	    clientConfig = __webpack_require__(5).create(true);

	var compiler = webpack(clientConfig);
	app.use(webpackMiddleware(compiler, {
		publicPath: "/build/",
		stats: {
			colors: true,
			chunks: false,
			assets: false,
			timings: false,
			modules: false,
			hash: false,
			version: false
		}
	}));
	app.use(webpackHotMiddlware(compiler));
	console.log(chalk.bgRed("Using WebPack Dev Middleware! THIS IS FOR DEV ONLY!"));
}

app.engine(".hbs", exphbs({ defaultLayout: "layout", extname: ".hbs" }));
app.set("view engine", "hbs");
app.use(express.static(path.join("public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);

app.use(function (req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

var port = process.env.port || 3000;
function startServer() {
	server.listen(port, function () {
		console.log("Started http server on " + port);
	});
}
startServer();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("autoprefixer");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map