// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editId = ''

// ****** EVENT LISTENERS **********
//submit-form
form.addEventListener('submit',addItem)
//clear items
clearBtn.addEventListener('click',clearItems)
//load items
window.addEventListener('DOMContentLoaded',setupItems)

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if(value && !editFlag){
      creatListItems(id,value)
       displayAlert('item added to the list', 'success')
       container.classList.add('show-container')
       //add to local storage
       addToLocalStorage(id,value)
       //set back to deafult
       setBackToDafult()
    }
    else if(value && editFlag){
       editElement.innerHTML = value
       displayAlert('value change','success')
       //edit local storage
       editLocalStorage(editId,value)
       setBackToDafult()
    }
    else{
       displayAlert('please enter the value','danger')
    }
}
//display alert
function displayAlert(text, action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)

    //remove alert
    setTimeout(function(){
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
    },1000)
}
// clear Items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item')
    if(items.length >0){
        items.forEach(item =>{
            list.removeChild(item)
        })
    }
    container.classList.remove('show-container')
    displayAlert('empty-list','danger')
    setBackToDafult()
    localStorage.removeItem('list')
}
//edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling
    //set from value
    grocery.value = editElement.innerHTML
    editFlag = true
    editId = element.dataset.id
    submitBtn.textContent = 'edit'
}
//delete function
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
  
    list.removeChild(element)
    console.log(list.children.length)
  
    if (list.children.length === 1) {
      container.classList.remove("show-container")
    }
    displayAlert('item removed','danger')
    setBackToDafult()
    remeveFormLocalStorage(id)
}
//set back to deafult
function setBackToDafult(){
    grocery.value = ''
    editFlag = false
    editId = ''
    submitBtn.textContent = 'submit'
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
    const grocery = {id,value}
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem('list',JSON.stringify(items))
    // console.log(items)
}
function remeveFormLocalStorage(id){
 let items = getLocalStorage()
 items = items.filter(item =>{
     if(item.id !== id){
         return item
     }
 })
 localStorage.setItem('list',JSON.stringify(items))
}
function editLocalStorage(id,value){
 let items = getLocalStorage()
 items = items.map((item)=>{
     if(item.id === id){
         item.value = value
     }
     return item
 })
 localStorage.setItem('list',JSON.stringify(items))
}
function getLocalStorage(){
 return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
}
//local storage api
//set item
//get item
//remove item
//save as a string

// ****** SETUP ITEMS **********

function setupItems(){
    let items = getLocalStorage()
    if(items.length >0){
        items.forEach((item)=>{
            creatListItems(item.id,item.value)
        })
        container.classList.add('show-container')
    }
}


function creatListItems(id,value){
    const element = document.createElement('article')
    element.classList.add('grocery-item')
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`

//delete btn
const deleteBtn = element.querySelector('.delete-btn')
const editBtn = element.querySelector('.edit-btn')
deleteBtn.addEventListener('click', deleteItem)
editBtn.addEventListener('click', editItem)
//append     
    list.appendChild(element)
}