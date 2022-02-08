// set initial value
let count = 0;

//select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click' , function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
            document.body.style.color = "red";
        }
        else if(styles.contains("increase")){
            count++;
            document.body.style.color = "green";
        }
        else{
            count = 0;
           
        }
        value.textContent = count;
    })
})

