// eslint-disable-next-line max-classes-per-file
import './style.css';
import Task from './modules/Task.js';
import TaskList from './modules/TaskList';

const tasksList = new TaskList();
const generatedElements = document.querySelector('.tasks-container');

const renderTitle = () => {
  const title = document.createElement('div');
  title.classList.add('row');
  title.innerHTML = `
  <h2>Demo</h2>
  <div class="refresh"></div>`;
  return title;
};

const renderAddItem = () => {
  const addElementInput = document.createElement('div');
  addElementInput.id = 'input-row';
  addElementInput.innerHTML = `
  <input type="text" id='add-new-item' class="input-new-item" placeholder="Add to your list...">
  <input type="submit" id="submit-new-item" value title="click this or press enter to submit">
  `;
  return addElementInput;
};

const renderItemRows = () => {
  const item = document.createElement('ul');
  item.id = 'id-item-list';
  const list = tasksList.getTask();
  list.forEach((task) => {
    item.appendChild(task);
  });
  return item;
};

const renderBtn = () => {
  const btn = document.createElement('div');
  btn.innerHTML = '<button class=\'row\' id="clear-btn">Clear all completed</button>';
  return btn;
};

const refresh = () => {
  generatedElements.replaceChild(renderItemRows(), generatedElements.childNodes[2]);
};

generatedElements.appendChild(renderTitle());
generatedElements.appendChild(renderAddItem());
generatedElements.appendChild(renderItemRows());
generatedElements.appendChild(renderBtn());

const inputSubmitTaskBtn = generatedElements.querySelector('#submit-new-item');
const inputSubmitTaskText = generatedElements.querySelector('#add-new-item');
const listContent = generatedElements.querySelector('#list-content');

inputSubmitTaskText.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    const data = new Task(inputSubmitTaskText.value);
    tasksList.add(data);
    inputSubmitTaskText.value = '';
    tasksList.newIndex();
    refresh();
    //  Listener();
  }
});

inputSubmitTaskBtn.addEventListener('click', () => {
  const data = new Task(inputSubmitTaskText.value);
  tasksList.add(data);
  inputSubmitTaskText.value = '';
  tasksList.newIndex();
  generatedElements.replaceChild(renderItemRows(), listContent);
});

/*
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
*/
