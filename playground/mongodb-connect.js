const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  db.collection('Todos')
  .find({
    completed: true,
  })
  .toArray()
  .then(docs => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));  
  }).catch((err) => {
    
  });


  // db.collection('Users').insertOne({
  //   name: 'Mito',
  //   age: 25,
  //   location: 'Katmandu',
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Error writting in the database');
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2))
  // })
  // db.collection('Todos').insertOne({
  //   text: 'Sometihing to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Error writting in the database');
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2))
  // })

  db.close();
});
