//jshint esversion:6
//Run Server
const MongoClient = require('mongodb').MongoClient;
const assert =  require('assert');
const url = 'mongodb://localhost:27017';
const dbname = 'fruitsdb';
const client = new MongoClient(url, {useNewUrlParser: true});
client.connect(function(err){
  assert.equal(null, err);
  console.log("connected Successfully to Server!");
  const db = client.db(dbname);
//insert call function
  // insertDocuments(db, function(){
  //   client.close();
  // });
//find all records
  findDocuments(db, function(){
    client.close();
  });
});
//Insert data
const insertDocuments = function(db, callback){
  const collection = db.collection('fruits');
  collection.insertMany([
    {
      _fid: 1,
      name: "apple"
    },
    {
      _fid: 2,
      name: "banana"
    },
    {
      _fid: 3,
      name: "custedapple"
    }
  ], function(err, result){
    assert.equal(err, null);
    assert.equal(3,result.insertedCount);
    assert.equal(3,Object.keys(result.insertedIds).length);
    console.log("Inserted 3 Items!");
    callback(result);
  });
}
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
