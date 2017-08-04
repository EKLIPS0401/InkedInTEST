var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const opn = require("opn");

Users = require("./models/users");
Artists = require("./models/artists");

// Connect to Mongoose
mongoose.connect(
  "mongodb://inkedingroup:inkedin123@ds127783.mlab.com:27783/inkeddb" //mongodb:Localhost/bookstore"
); //Verify db name
//var db = mongoose.connection;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  //we're connected
  console.log("Your DB is connected, congratulations!");
});

app.get("/", function(req, res) {
  res.send("Hello World, Remember to review API/BOOKS thang");
});

app.get("/artists", function(req, res) {
  //res.send("This SHOULD be the ARTISTS collection");
  Artists.getArtists(function(err, artists) {
    if (err) {
      throw err;
    }
    res.json(artists);
  });
});

app.get("/users", function(req, res) {
  //res.send("This SHOULD be the USERS collection");
  Users.getUsers(function(err, users) {
    if (err) {
      throw err;
    }
    res.json(users);
  });
});

app.listen(3000);
console.log("Running InkedIn on port 3000... ");
opn("http://localhost:3000");
