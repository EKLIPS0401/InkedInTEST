var mongoose = require("mongoose");

// Artists Schema
var artistsSchema = mongoose.Schema(
  {
    // firstname: {
    //   type: String,
    //   required: true
    // },
    // lastname: {
    //   type: String,
    //   required: true
    // },
    // style: {
    //   type: String,
    //   required: true
    // }
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
  }
);

var Artists = (module.exports = mongoose.model("Artists", artistsSchema));

//Get Artists
module.exports.getArtists = function(callback, limit) {
  Artists.find(callback).limit(limit);
};
