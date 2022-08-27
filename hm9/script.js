window.addEventListener('load', function() {
    
    let addContent = document.querySelector('.contnentInput'),
        todo = document.querySelector('.main__wrapper_todo'),
        clear = this.document.querySelector('.clear');


   let todoList = [];


    addContent.addEventListener('keydown', function(event) {
        if(event.keyCode === 13) {
            
            let newTodo = {
                todo: addContent.value,
                checked: false,
            }
            todoList.push(newTodo);

            viewMessages();
            addContent.value = '';
        }
    });

    let viewMessages = function() {
        let viewMessage = '';
        todoList.forEach(function(item, i) {
            viewMessage += `
            <li>
                <input class="inputCheck" type="checkbox" name="todolist" id='item_${i}'>
                <label  for="item_${i}">${item.todo}</label>
            </li>
            `;
            
            todo.innerHTML = viewMessage;

        });

    }
    
    todo.addEventListener('change', function(event) {

        let idInput = event.target.getAttribute('id');
        let forLabel = todo.querySelector('[for=' + idInput + ']');
        forLabel.classList.toggle('active');
        
    });

    
    todo.addEventListener('dblclick', function(event) {
        let idInput = event.target.getAttribute('id');
        let forLabel = todo.querySelector('[for=' + idInput + ']');
        let renamed = prompt(`${forLabel.innerHTML}`);
        forLabel.innerHTML = renamed;

    });




    clear.addEventListener('click', function(event) {
        todo.innerHTML = '';
        todoList = [];
        console.log(todoList);
    });


});












