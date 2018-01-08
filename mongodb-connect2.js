const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://mjfbin:WcK6cf3AaMNT2mlQzWD9dDGhSgp7vATFzuIm0dOKY3c1ztzFLw18uuijlHppHzCQTodrdVMEmFe9r7OV9NzKfA==@mjfbin.documents.azure.com:10255/Cats?ssl=true', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 25,
    location: 'Philadelphia'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err);
    }

    console.log(result.ops);
  });

  //db.close();
});
