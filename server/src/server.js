var bodyParser = require("body-parser");
var express = require("express");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("server is running on ".concat(PORT));
});
