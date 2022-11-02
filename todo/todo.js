const list = document.querySelector('.todo-list');
const form = document.querySelector('.todo-form');
const input = document.querySelector('.add-input');
const add = document.querySelector('.add-button');

let taskId = 1;

function createItem(text_task) {
	const checkbox = document.createElement("input");
	checkbox.className = "checkbox";
	checkbox.type = 'checkbox';

	const text = document.createElement("label");
	text.className = "title";
	text.innerText = text_task;

	const changeInput = document.createElement("input");
	changeInput.className = "textfield";
	changeInput.type = 'text';

	const edit = document.createElement("button");
	edit.className = "edit";
	edit.textContent = 'изменить';

	const trash = document.createElement("button");
	trash.className = "delete";
	trash.textContent = 'удалить';

	const task = document.createElement("li");
	task.className = "todo-item";
	
	task.appendChild(text);
	task.appendChild(checkbox);
	task.appendChild(text);
	task.appendChild(changeInput);
	task.appendChild(edit);
	task.appendChild(trash);

	bindEvents(task);
	return task;
}


function readyTask() {
	const item = this.parentNode;
  let tasks = getTaskListfromStorage();

	if(item.querySelector(".checkbox").checked) {
		item.querySelector('.title').style.textDecoration = 'line-through';

    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].id === parseInt(item.dataset.id)) {
        tasks[i].status = 'ready';
      }
    }
  }
  else {
    item.querySelector('.title').style.textDecoration = 'none';
    for(let i = 0; i < tasks.length; i++) {
      if(tasks[i].id === parseInt(item.dataset.id)) {
        tasks[i].status = 'work';
      }
    }
  }
  localStorage.setItem('task', JSON.stringify(tasks));
}


function removeItem() {
	const listItem = this.parentNode;
  
	//document.querySelector('.todo-list').remove(); // ИЛИ так
	document.querySelector('.todo-list').removeChild(listItem); // ИЛИ так

	let tasks = getTaskListfromStorage();
	let updateTasks = tasks.filter(el => el.id !== parseInt(listItem.dataset.id));

	localStorage.setItem('task', JSON.stringify(updateTasks));
}


function editTask() {
	const listItem = this.parentNode;
	const title = listItem.querySelector(".title");
	const editInput = listItem.querySelector(".textfield");
	const isEditing = listItem.classList.contains("editing");

	if(isEditing) {
		title.innerText = editInput.value;
		this.innerText = "Изменить";
	}
	else {
		editInput.value = title.innerText;
		this.innerText = "Сохранить";
	}

  listItem.classList.toggle("editing");

  let tasks = getTaskListfromStorage();
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].id === parseInt(listItem.dataset.id)) 
      tasks[i].title = editInput.value;
  }

  localStorage.setItem('task', JSON.stringify(tasks));
}


function addTask(event) {
  // метод для «предотвращения» срабатывания событий
	event.preventDefault();

	if(input.value.length === 0)
	 	return alert('Пустой ввод, введите символы');

	const todoItem = createItem(input.value);


  const tasks = getTaskListfromStorage();
  for (let i = 0; i < tasks.length; i++) {
    todoItem.setAttribute('data-id', taskId);
  }

	list.appendChild(todoItem);
	saveLocalStorage(input.value);

	input.value = "";
}


function saveLocalStorage(task) {
	let tasks = getTaskListfromStorage();
	tasks.push(
		{
      'id': taskId, 
		  'title': task,
      'status': 'work'
		});
	taskId++;
	localStorage.setItem('task', JSON.stringify(tasks));
}


function outputTask() {
	if(localStorage.getItem('task') !== null) {

		const taskArray = getTaskListfromStorage();
		taskId = taskArray[taskArray.length - 1].id;
		taskId++;

		for (let i = 0; i < taskArray.length; i++) {
			let item = createItem(taskArray[i].title);
			item.setAttribute('data-id', `${taskArray[i].id}`);

      if(taskArray[i].status === 'ready') {
        item.querySelector(".checkbox").setAttribute("checked","checked");
        item.querySelector('.title').style.textDecoration = 'line-through';
      }
			list.appendChild(item);
		}    
	}
}

function getTaskListfromStorage() {
	return localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
}

// Ладно, допустим научился выводить инфу из файла, а как доибавить и изменить её в файле?
/*function loadJSON() {
	fetch('db.json')
	.then(res => res.json())
	.then(data => {
		data.forEach(product => {
			const todoItem = createItem(product.task);
			list.appendChild(todoItem);
		});
	})
	.catch( error => {
		alert('User live server or local server');
	});
}*/


function bindEvents(task) {
	task.querySelector(".checkbox").addEventListener('change', readyTask);
	task.querySelector('button.delete').addEventListener('click', removeItem);
	task.querySelector('button.edit').addEventListener('click', editTask);
}

const todoItems = document.querySelectorAll('.todo-item');

function main() {
	window.addEventListener('DOMContentLoaded', () => { // когда загрузился страница, то
		loadJSON();	// подгружаем JSON		
		//outputTask();						
	});

	form.addEventListener('submit', addTask);
	todoItems.forEach(e => bindEvents(e));
}

main();