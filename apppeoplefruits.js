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
// fruit.save();
const personSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "Harshitha",
  age: 23
});
person.save();
const kiwi =  new Fruit({
  name: "Kiwi",
  rate: 9,
  review: "Improves Blood"
});
const orange =  new Fruit({
  name: "orange",
  rate: 10,
  review: "Improves Immune"
});
const banana =  new Fruit({
  name: "banana",
  rate: 9,
  review: "Improves Digesion"
});
Fruit.insertMany([kiwi, orange, banana], function(err){
  if(err){
    console.log(err);
  } else {
    console.log("Success to save fruits to fruitsdb");
  }
});
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
