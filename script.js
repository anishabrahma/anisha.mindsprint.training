let todos = []; // Initialize an empty array for tasks

// Add event listener to the button
document.getElementById('btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim(); // Remove leading/trailing spaces
    if (taskText) {
        todos.push(taskText);
        taskInput.value = ''; // Clear input field
        console.log('Task Added', todos);
        displayData();
    }
});

function displayData() {
    const taskList = document.getElementById('tasks');
    if (todos.length === 0) {
        taskList.innerHTML = '<li class="list-group-item">List is empty</li>';
    } else {
        let html = '';
        for (const t of todos) {
            html += `
                <li class="list-group-item">${t}
                    <button class="btn btn-danger">Delete</button>
                </li>`;
        }
        taskList.innerHTML = html;
    }
}

function deleteTask(task) {
    const foundIndex = todos.findIndex(t => t === task);
    if (foundIndex !== -1) {
        todos.splice(foundIndex, 1);
        alert('Task deleted');
        displayData();
    }
}

displayData();

