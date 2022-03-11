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

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault()
    const value = grocery.value
    const id = new Date().getTime().toString()
    if(value && !editFlag){
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
       list.appendChild(element)
       displayAlert('item added to the list', 'success')
       container.classList.add('show-container')
       //add to local storage
       addToLocalStorage(id,value)
       //set back to deafult
       setBackToDafult()
    }
    else if(value && editFlag){
        console.log('editing')
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
    //localStorage.removeItem('list')
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
    console.log('add to local storage')
}

// ****** SETUP ITEMS **********
