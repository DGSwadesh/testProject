var express = require("express")
var path = require("path")
var routes = require("./router")
var mongoose = require("mongoose")
var cookiesParser = require("cookies-parser")
var passport = require("passport")
var session = require("express-session")
var flash = require("connect-flash")
var app = express();

app.set("port" , process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(routes)

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"))
    
})



