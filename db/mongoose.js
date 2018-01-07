var config = require ('../config.js');
var mongoose = require('mongoose');

console.log(config.connect_string);

mongoose.Promise = global.Promise;
mongoose.connect(config.connect_string);

module.exports = {mongoose};
