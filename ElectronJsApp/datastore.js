const Store = require('electron-store');

class DataStore extends Store {
  constructor(settings) {
    super(settings);
    this.todos = [];
  }

  addTodo(todo) {
    // merge the existing todos with the new todo
    this.todos.push(todo);
    return this.todos;
  }

  deleteTodo(todo) {
    // filter out the target todo
    this.todos = this.todos.filter(t => t !== todo);
    return this.todos;
  }
}

module.exports = DataStore;
