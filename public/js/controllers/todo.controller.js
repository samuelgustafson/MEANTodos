(function(){
  angular.module('MEANTodos') //getter syntax
<<<<<<< HEAD
  .controller('TodoController', TodoController);

  TodoController.$inject = ['$scope', 'TodoService'];

  function TodoController($scope, TodoService){
    $scope.todos = [];
    $scope.newTodo = {};
    $scope.addTodo = addTodo;
    $scope.deleteTodo = deleteTodo;
    $scope.update = update;
    $scope.edit = edit;

    getTodos();

    function edit (todo){
      console.log('editing...');
      todo.edit = true;
    }

    function update(todo){
      console.log('updating...');
      todo.edit = false;
      TodoService.update(todo)
                 .then(function(response){
                   getTodos();
                 });
    }

    function deleteTodo(todo){
      TodoService.delete(todo)
                 .then(function (response){
                   console.log(response);
                 });

    }

    function addTodo(newTodo){
      console.log('creating a new todo...');
      TodoService.create(newTodo)
                 .then(function(response){
                  getTodos();
                  $scope.newTodo = {};
                 });
    }

    function getTodos(){
      console.log('Getting the todos...');
      TodoService.getAll()
                 .then(function(response){
                   $scope.todos = response.data.todos;
                 });
    }

  }
=======
    .controller('TodoController', TodoController);

    TodoController.$inject = ['$scope', 'TodoService'];

    function TodoController($scope, TodoService){
      $scope.todos = [];
      $scope.newTodo = {};
      $scope.addTodo = addTodo;
      $scope.deleteTodo = deleteTodo;
      $scope.update = update;
      $scope.edit = edit;
      $scope.autocheck = true;

      getTodos();

      $scope.$watch(function watcher(){
        return TodoService.fetch();
      },
      function onChange(){
        $scope.todos = TodoService.fetch();
      });



      function edit(todo){
        console.log('editing...');
        todo.edit = true;
      }

      function update(todo){
        console.log('updating...');
        todo.edit = false;
        TodoService.update(todo);
      }

      function deleteTodo(todo){
        TodoService.delete(todo);
      }

      function addTodo(newTodo){
        console.log('Creating a new todo...');
        TodoService.create(newTodo)
                  .then(function(response){
                    $scope.newTodo = {};
                  });
      }

      function getTodos(){
        console.log('Getting the todos...');
        TodoService.getAll();
      }

    }
>>>>>>> 4df4900f92be5bf6e50ebc016e44dee77d1fbe44
})()
