//Create the Mongoose Schema
var todoSchema = mongoose.Schema({
  isCompleted: Boolean,
  description: String,
});
//Create the Mongoose Model
var Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
