const Mongo=require('mongoose');

// Configuring the Database  and Connecting

Mongo.connect('mongodb://127.0.0.1:27017/Todo_Db');

const db= Mongo.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open",function () {
    console.log("Connected successfully");
  });
