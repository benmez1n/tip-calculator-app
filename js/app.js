//get HTML elements
let buttons = document.querySelectorAll('#buttons button'),
    inputs = document.querySelectorAll('main input'),
    resetBtn = document.getElementById("reset");
    tipDom = document.getElementById('tip-amount'),
    totalDom=document.getElementById('total'),
    error=document.getElementById('is-error'),
//initialise variables 
    tip=0,
    total=0,
    bill=0,
    percent=0,
    peopleNumber=0,
    buttonsList = [];

//reset buttons colors
function bgReset(){
    for(let j = 0;j<buttons.length;j++){
        buttons[j].classList.remove('select')
    }
}


function app(){
    inputs.forEach(element => {
        element.addEventListener("focus",function(){this.classList.add('active')})
    });

    for(let i=0 ; i<inputs.length;i++){
        for(let i=0 ; i<buttons.length;i++){
            buttonsList.push(buttons[i].getAttribute('percent'));
            buttons[i].addEventListener('click',function(){
                bgReset();
                percent = this.getAttribute('percent');
                this.classList.add('select')
            },false);
        }

        //if inputs are empty return (do nothing) 
        if(inputs[0].value=="")return;
        if(inputs[2].value=="")return;

        if(i==0)bill=inputs[i].value;
        else if(i==1){
            if(inputs[i].value!==""){
                percent=inputs[i].value;
            }
        }

        //if the number of people equal to zero add errors classes to element (display error msg)
        if(inputs[2].value ==0){
            error.classList.add('error');
            error.nextElementSibling.classList.add('error-input');
            return;
        }
        else if(i==2){
            peopleNumber=inputs[i].value;
            error.classList.remove('error');
            error.nextElementSibling.classList.remove('error-input');
        }      
      
        //calculate and display results 
        tip=(bill*percent/100)/peopleNumber;
        total=(bill/peopleNumber)+tip;
        tipDom.textContent = tip.toFixed(2);
        totalDom.textContent=total.toFixed(2);
    }
}

window.onload = ()=>setInterval(app,100);

resetBtn.addEventListener('click',function(){
    let num =0;
    bgReset();
    inputs.forEach(element=>element.value="");
    tipDom.textContent = num.toFixed(2);
    totalDom.textContent=num.toFixed(2);
},false);