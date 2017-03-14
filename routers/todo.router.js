var express = require('express');
var todoRouter = express.Router();
var Todo = ('../models/todo.model');

// GET /todos
todoRouter.get('/todos', fuction(req, res){
  Todo.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        todos: documnts
      });
    }
  });
});
// GET /todos/:id
todoRouter.get('/todos/:id', function(req, res){
  Todo.find({_id:req.params.id}, function (err, documents){
    if(err){
      res.status(500).json({
        msg:err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});
// POST /todos/
// PUT /todos/:id
// DELETE /todos/:id
