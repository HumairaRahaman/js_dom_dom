function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4 ){
        return pin;
    }
    else{
        
        return getPin();
    }
}


function genaratePin(){
   const pin = getPin();
   document.getElementById("show-pin").value = pin;
}

//calculation part
document.getElementById("key-pad").addEventListener("click", function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    const prevNumber = calcInput.value;
    const newNumber = prevNumber + number;
    calcInput.value = newNumber;
    }
   
    
})
// maching pin number

function verifyPin(){
    const pin = document.getElementById('show-pin').value;
    const typeNumbers = document.getElementById("typed-numbers").value;
    const notifySuccess= document.getElementById("notify-success");
    const notifyFail= document.getElementById("notify-fail");
    if(pin == typeNumbers){
        
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else{
        
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
}