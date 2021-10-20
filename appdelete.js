//jshint esversion:6
//Run Server
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsdb",{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,'Fruit Name is required']
  },
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  review: String,
  like: String
});
const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit ({
  rate: 4,
  review: "BBQ is yummy"
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
// person.save();

Fruit.find(function(err, fruits){
  if(err) {
    console.log(err);
  } else {
    // console.log(fruits);
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});
//
// Fruit.updateOne({_id: "6170902bd4b25db27cea07e7"}, {like: "Great Breakfast!"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success");
//   }
// });

// Person.deleteOne({name:"Harshitha"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("success in deletion");
//   }
// });
Person.deleteMany({name:"Harshitha"}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("success in deletion");
  }
});
