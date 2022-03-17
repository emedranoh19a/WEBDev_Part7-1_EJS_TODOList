//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy food", "Cook food", "Eat food"];
var workItems =[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  var today = new Date();
  day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    listTitle: day,
    addedItems: items
  });
});

app.post("/", function(req, res) {
let newItem= req.body.addedItem;
if(req.body.list === "Work List"){
  workItems.push(newItem);
  res.redirect("/work");
  console.log("Pushed into workItems")
}else{
  items.push(newItem);
  res.redirect("/");
  console.log("Pushed into today items")
}

});

app.get("/work", function(req, res){
  res.render("list", {listTitle:"Work List",addedItems: workItems});

});

app.get("/about",function(req,res){
res.render("about", {});
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
