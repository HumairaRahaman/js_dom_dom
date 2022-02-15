//select items

let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

//function
let createTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
   

    return listItem;
}
//new task setup

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    bindIncompleteItems(listItem, completeTask);
}

let completeTask = function(){
 let listItem = this.parentNode;
 let deleteBtn = document.createElement('button');
 deleteBtn.innerText = 'Delete';
 deleteBtn.className = 'delete';
 listItem.appendChild(deleteBtn);

 let checkBox = listItem.querySelector('input[type="checkbox"]');
 checkBox.remove();
 completeUl.appendChild(listItem);
 bindcompleteItems(listItem,deleteTask);

}
let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
let bindIncompleteItems = function(taskItem,checkboxclick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxclick;
}

let bindcompleteItems = function(taskItem,deleteBtnclick){
    let deleteBtn = taskItem.querySelector('.delete');
    deleteBtn.onclick = deleteBtnclick;
}

for(let i=0 ; i<todoUl.children.length ; i++){
    bindIncompleteItems(todoUl.children[i],completeTask);
}
for(let i=0 ; i<completeUl.children.length ; i++){
    bindcompleteItems(completeUl.children[i],deleteTask);
}
form.addEventListener('submit', addTask);