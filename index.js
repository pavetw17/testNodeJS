var express = require("express");
var app = express();
app.use(express.static("public")); //images
app.set("view engine","ejs"); // declare engine EJS
app.set("views","./views"); // declare view pages
app.listen(3000);

app.get("/", function(req, res){
    res.render("homePage");
})
