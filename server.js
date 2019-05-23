var express = require("express");
const apiRoutes = require("./routing/apiroutes");
const htmlRoutes = require("./routing/htmlroutes");
var friends = require("./data/friends");

var PORT = process.env.PORT || '80'

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

var PORT = process.env.port || "8080";


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
