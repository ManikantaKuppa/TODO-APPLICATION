const todoList = [{
    name: 'make dinner',
    dueDate:'2022-12-22'
}]; //save the data

renderTodoList();
function renderTodoList(){
    let todoListHTML = '';

    // for (let i = 0; i < todoList.length; i++){
    //     todoListHTML += `<p>${todoList[i]}</p>`;   
    // }

    for(let i = 0; i < todoList.length; i++){
        const todoObject = todoList[i];

        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;

        const{name,dueDate} = todoObject;

        const html = `
        <div>${name} </div>

        <div> ${dueDate} </div>

        <button class="delete-button js-delete-button" 
        // onclick="
        // todoList.splice(${i},1);
        // renderTodoList();"
        >Delete</button>
        `; 
        //Generating the HTML
        todoListHTML += html; 
    }

    // console.log(todoListHTML);
    document.querySelector('.todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton,index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index,1);
            renderTodoList();
        });
    });
}


function addTodo(){
    const input = document.querySelector('.name-input');
    const name = input.value;

    const date = document.querySelector('.date-input');
    const dueDate = date.value;

    todoList.push({
        // name : name,
        // dueDate : dueDate
        name,
        dueDate
    });
    console.log(todoList);

    input.value = '';
    date.value = '';
    renderTodoList();
};