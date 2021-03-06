
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

apiRoutes.init(app, path);
htmlRoutes.init(app, path);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

module.exports = { app };
