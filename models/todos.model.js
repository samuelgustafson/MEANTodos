var mongoose = require('mongoose');

//Create the Mongoose Schema
var todosSchema = mongoose.Schema({
  isCompleted: Boolean,
  description: String,
});
//Create the Mongoose Model
var Todos = mongoose.model('Todos', todosSchema);
module.exports = Todos;
