const { ipcRenderer } = require('electron');

// create add todo window button
document.getElementById('showUserbtn').addEventListener('click', () => {
  document.getElementById('Todo').style.display = 'none';
  document.getElementById('usersDetais').style.display = '';

  const axios = require('axios');
  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .then(user => {
      if (user.length > 0) {
        let tableHtml = `<table class='table table-striped'>
                            <tr>
                            <td>
                                Name
                            </td>
                            <td>
                                Username
                            </td>
                            <td>
                                Email
                            </td>
                            </tr>`;
        for (let i = 0; i < user.length; i++) {
          tableHtml += `<tr>
                            <td>
                                ${user[i].name}
                            </td>
                            <td>
                                ${user[i].username}
                            </td>
                            <td>
                                ${user[i].email}
                            </td>
                            </tr>`;
        }
        tableHtml += '</table>';
        usersDetais.innerHTML = tableHtml;
      } else {
        usersDetais.innerHTML = 'no data found';
      }
    })
    .catch(err => (usersDetais.innerHTML = err));
});

// delete todo by its text value ( used below in event listener)
const deleteTodo = e => {
  ipcRenderer.send('delete-todo', e.target.textContent);
};

// create add todo window button
document.getElementById('createTodoBtn').addEventListener('click', () => {
  document.getElementById('usersDetais').style.display = 'none';
  document.getElementById('Todo').style.display  = '';
  ipcRenderer.send('add-todo-window');
});

// on receive todos
ipcRenderer.on('todos', (event, todos) => {  
  // get the todoList ul
  const todoList = document.getElementById('todoList');

  // create html string
  const todoItems = todos.reduce((html, todo) => {
    html += `<li class="todo-item">${todo}</li>`;

    return html;
  }, '');

  // set list html to the todo items
  todoList.innerHTML = todoItems;

  // add click handlers to delete the clicked todo
  todoList.querySelectorAll('.todo-item').forEach(item => {
    item.addEventListener('click', deleteTodo);
  });
});
