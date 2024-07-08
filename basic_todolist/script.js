function addTask(category) {
    const inputElement = document.getElementById(category + 'Input');
    const taskList = document.getElementById(category + 'Tasks');
    
    if (!inputElement) {
        console.error(`입력값이 존재하지 않습니다: ${category}`);
        return;
    }
    if (!taskList) {
        console.error(`할일이 존재하지 않습니다: ${category}`);
        return;
    }
    
    if (inputElement.value.trim() !== "") {
        const newTask = document.createElement('li');
        newTask.textContent = inputElement.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function() {
            taskList.removeChild(newTask);
        };
        
        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        
        inputElement.value = '';
    }
}

function addCategory() {
    const categoryContainer = document.getElementById('categories');
    const newCategoryInput = document.getElementById('newCategoryInput');
    const newCategoryName = newCategoryInput.value.trim();
    
    if (newCategoryName !== "") {
        const newCategory = document.createElement('div');
        newCategory.className = 'category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = newCategoryName;
        
        const taskList = document.createElement('ul');
        taskList.id = newCategoryName + 'Tasks';
        taskList.className = 'tasks';
        
        const inputField = document.createElement('input');
        inputField.id = newCategoryName + 'Input';
        inputField.type = 'text';
        inputField.placeholder = '할 일을 입력하세요';
        
        const addButton = document.createElement('button');
        addButton.textContent = '추가';
        addButton.setAttribute('onclick', `addTask('${newCategoryName}')`);// 실수: 여기서 마지막 ' 부분 빼먹음
        
        const deleteCategoryButton = document.createElement('button');
        deleteCategoryButton.textContent = '삭제';
        deleteCategoryButton.className = 'delete-category';
        deleteCategoryButton.onclick = function() {
            categoryContainer.removeChild(newCategory);
        };
        
        newCategory.appendChild(categoryTitle);
        newCategory.appendChild(deleteCategoryButton);
        newCategory.appendChild(taskList);
        newCategory.appendChild(inputField);
        newCategory.appendChild(addButton);
        
        categoryContainer.appendChild(newCategory);
        newCategoryInput.value = '';
    }
}