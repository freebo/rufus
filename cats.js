var mongoose = require('mongoose');
mongoose.connect('mongodb://mjfbin:WcK6cf3AaMNT2mlQzWD9dDGhSgp7vATFzuIm0dOKY3c1ztzFLw18uuijlHppHzCQTodrdVMEmFe9r7OV9NzKfA==@mjfbin.documents.azure.com:10255/Cats?ssl=true', { useMongoClient: true });
mongoose.Promise = global.Promise;

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'Mark' });
kitty.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('meow');
  }
});