const list = document.querySelector('.todo-list');
const input = document.querySelector('.add-input');
const add = document.querySelector('.add-button');


function addTask() {
  const task = document.createElement("li");
  const checkbox = document.createElement("input");
	const text = document.createElement("label");
	const changeInput = document.createElement("input");
	const edit = document.createElement("button");
	const trash = document.createElement("button");

	task.className = "todo-item";
	checkbox.className = "checkbox";
	text.className = "title";
	changeInput.className = "textfield";
	edit.className = "edit";
	trash.className = "delete";

	checkbox.type = 'checkbox';
	changeInput.type = 'text';

	edit.textContent = 'изменить';
	trash.textContent = 'удалить';

	task.appendChild(text);
	
	if(input.value.length === 0) {
		alert('Пустой ввод, введите символы');
		return 0;
	}

  text.textContent = input.value;
  
  checkbox.addEventListener("click", () => {
		text.style.textDecoration = 'line-through';
    //text.classList.toggle('checked');
  });
  task.appendChild(checkbox);
	task.appendChild(text);
	task.appendChild(changeInput);
	task.appendChild(edit);

	edit.addEventListener("click", () => {
		task.classList.toggle('editing');
		text.textContent = changeInput.value;
  });

  trash.addEventListener("click", () => {
    task.remove();
  });
  task.appendChild(trash);
  
  list.appendChild(task);
  input.value = "";
}

add.addEventListener('click', addTask);