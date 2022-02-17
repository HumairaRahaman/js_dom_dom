
// input function
function getInputValue(catagory){
    const valueInput = document.getElementById(catagory +'-input');
    const elementValue = parseFloat(valueInput.value);
    
        return elementValue; 
}

//calculate button

document.getElementById('calculate-button').addEventListener('click',function (){

    let totalExpense = getInputValue('food') + getInputValue('rent') + getInputValue('clothes');
    
    
    let valueError = document.getElementById('error-bigValue');
    let inputError = document.getElementById('error-input');


    //error handle
    if(getInputValue('income') < totalExpense){
        //error
        errorHandel(true);

        //for value zero
        convertZero('remaining-balance');
        convertZero('saving-amount');
        convertZero('total-expenses');
        convertZero('Balance');
    }

    else if(getInputValue('income') < 0  || getInputValue('food') < 0 || getInputValue('rent')< 0 || getInputValue('clothes') < 0){
        //error
        errorHandel(false);

        //for value zero
        convertZero('remaining-balance');
        convertZero('saving-amount');
        convertZero('total-expenses');
        convertZero('Balance');
        
    }

    else{

        //expence
        document.getElementById('total-expenses').innerText = totalExpense;
        
        //balance
        let balance = getInputValue('income') - totalExpense;
        document.getElementById('Balance').innerText = balance;
     
    }
   

    
});



// saving button

document.getElementById('save-button').addEventListener('click', function(){

    //saving amount
    let savingBalance = getInputValue('income') * getInputValue('save') / 100;
    
   
    //reaming balance
    let totalExpense = getInputValue('food') + getInputValue('rent') + getInputValue('clothes')

    let remainingBalence = getInputValue('income') - (totalExpense+ savingBalance)
   

   


    //error handel

    if((getInputValue('income') - totalExpense) < savingBalance){
    //error
    errorHandel(true);
    //for value zero
    convertZero('remaining-balance');
    convertZero('saving-amount');
    convertZero('total-expenses');
    convertZero('Balance');
    }
    else if(getInputValue('save') < 0 ) {
        //error
        errorHandel(false);
        //for value zero
        convertZero('remaining-balance');
        convertZero('saving-amount');
        convertZero('total-expenses');
        convertZero('Balance');
    }
    else{
        document.getElementById('saving-amount').innerText = savingBalance;
        document.getElementById('remaining-balance').innerText = remainingBalence;

    }


    //clear input field
    clear('save');
    clear('income');
     clear('food');
     clear('rent');
     clear('clothes');

});


//error function

function errorHandel(errorType){
    let valueError = document.getElementById('error-bigValue');
    let inputError = document.getElementById('error-input');
    if (errorType == true){
        valueError.style.display = 'block';
        inputError.style.display = 'none';
        clear('save');
        clear('income');
        clear('food');
        clear('rent');
        clear('clothes');
        
    }
    else if(errorType == false){
        inputError.style.display = 'block';
        valueError.style.display = 'none';
        clear('save');
        clear('income');
        clear('food');
        clear('rent');
        clear('clothes');
    }
}



//input field clear function
function clear(cost){
    const valueInput = document.getElementById(cost +'-input');
    valueInput.value = "";
  

}


// remain value zero function

function convertZero(value){
    document.getElementById(value).innerText = 0;
}