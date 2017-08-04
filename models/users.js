var mongoose = require("mongoose");

// Users Schema
var usersSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  }
  //   email: {
  //     type: String,
  //     required: true
  //   },
  //   username: {
  //     type: String
  //   },
  //   password: {
  //     type: String
  //   }
  //   // createdate:{
  //   //     type: Date,
  //   //     default: Date.now
  //   // }
});

var Users = (module.exports = mongoose.model("Users", usersSchema));

//Get Users
module.exports.getUsers = function(callback, limit) {
  Users.find(callback).limit(limit);
};
