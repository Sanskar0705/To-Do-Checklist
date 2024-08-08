document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() !== "") {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
        
        taskItem.appendChild(deleteButton);
        document.getElementById('tasks').appendChild(taskItem);
        
        document.getElementById('new-task').value = '';
    }
});
