// server.js 

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const port = process.env.PORT || 3030;
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(port, function() {
    console.log("Listening on PORT " + port);
});