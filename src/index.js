// eslint-disable-next-line max-classes-per-file
import './style.css';
import Task from './modules/Task.js';
import Store from './modules/Store.js';
import TaskList from './modules/TaskList';

// USER INTERFACE -----------------------------------------------------------------------
const store = new Store();
const tasksList = new TaskList();
const generatedElements = document.querySelector('.table');

/*
class UI {
  static displayTasks() {
    const tasks = store.getTasks();
    tasks.forEach((task) => UI.addTaskList(task));
  }

  static addTaskList(task) {
    const taskList = document.querySelector('.item-list');
    const li = document.createElement('li');
    li.classList.add('todo');
    li.id = `todo-${task.index}`;
    li.innerHTML = `
    <input type="checkbox">
    <div class="saved-item">
      
      <textarea class="task-description" id="${task.index}" maxlength="255">${task.description}</textarea>
    </div>
    <div class="item-icon" id="${task.index}">
    <div class="delete-icon hidden" id="${task.index}"></div>`;

    taskList.appendChild(li);
  }

  static clearFields() {
    document.querySelector('#new-item').value = '';
  }
}
*/

const renderTitle = () => {
  const title = document.createElement('div');
  title.classList.add('title-row');
  title.innerHTML = `
  <h2>Demo</h2>
  <div class="refresh"></div>`;
  return title;
};

const renderAddItem = () => {
  const addElementInput = document.createElement('div');
  addElementInput.classList.add('list');
  addElementInput.innerHTML = `
  <ul id="add-item">
    <li>
      <form>
        <input id='new-item' type="text" placeholder="Add to your list...">
        <input id="submit-new-item" type="submit" value title="click this or press enter to submit">
      </form>
    </li>
  </ul>
  <ul class="item-list">
  </ul>
  `;
  return addElementInput;
};

const renderItemRows = () => {
  const item = document.createElement('ul');
  //  item.id = 'todo';
  item.classList.add('item-list');
  item.id = 'id-item-list';
  const list = tasksList.getTask();
  list.forEach((task) => {
    item.appendChild(task);
  });
  return item;
};

generatedElements.appendChild(renderTitle());
generatedElements.appendChild(renderAddItem());
generatedElements.appendChild(renderItemRows());

//  document.addEventListener('DOMContentLoaded', UI.displayTasks);
//  const addNewItemClick = document.querySelector('#submit-new-item');

/*
  addNewItemClick.addEventListener('click', (e) => {
  e.preventDefault();
  const description = document.querySelector('#new-item').value;
  const completed = false;
  const index = store.count;
  const task = new Task(description, completed, index);
  UI.addTaskList(task);
  store.addTask(task);
  UI.clearFields();
});

const taskContent = document.querySelector('.item-list');
*/

function Listener() {
  const taskContent = document.querySelectorAll('task-description');
  taskContent.forEach((description) => {
    taskContent.addEventListener('click', (e) => {
      const row = document.querySelector('.todo');
      row.classList.add('editing');
    });
  });
} //  Listener
Listener();