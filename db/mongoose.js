var config = require ('../config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(config.connect_string);

module.exports = {mongoose};
