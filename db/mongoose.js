var mongoose = require('mongoose');
var config = require ('../config.js');

console.log(config.connect_string);

mongoose.Promise = global.Promise;
mongoose.connect(config.connect_string);

module.exports = {mongoose};
