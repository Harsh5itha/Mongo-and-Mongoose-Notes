//jshint esversion:6
//Run Server
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsdb",{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  name: "apple",
  rate: 6,
  review: "Keeps Doctor Away"
});
fruit.save();

//find data
const findDocuments = function(db, callback){
  const collection = db.collection('fruits');
  collection.find({}).toArray(function(err, fruits){
    assert.equal(err, null);
    console.log("Following records found!");
    console.log(fruits);
    callback(fruits);
  });
}
