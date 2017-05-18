const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const index = require("./routes/index");
const chalk = require("chalk");
const socketIo = require("socket.io");
const http = require("http");


const app = express();
const server = new http.Server(app);
const io = socketIo(server);

// Database
mongoose.connect("mongodb://hasratsabit:1234@ds143141.mlab.com:43141/zela");
mongoose.Promise = global.Promise;

// Client Webpack
if (process.env.USE_WEBPACK === "true") {
	var webpackMiddleware = require("webpack-dev-middleware"),
		webpackHotMiddlware = require("webpack-hot-middleware"),
		webpack = require("webpack"),
		clientConfig = require("../../webpack.client").create(true);


	const compiler = webpack(clientConfig);
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

app.engine(".hbs", exphbs({ defaultLayout: "layout", extname: ".hbs"}))
app.set("view engine", "hbs");
app.use(express.static(path.join("public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use("/", index);


app.use((req, res, next) => {
	const err = new Error("Not Found")
	err.status = 404;
	next(err);
})


const port = process.env.port || 3000;
function startServer() {
	server.listen(port, () => {
		console.log(`Started http server on ${port}`);
	})
}
startServer();
