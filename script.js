const display1el = document.querySelector('.display-1');
const display2el = document.querySelector('.display-2');
const tempresultel = document.querySelector('.temp-result');
const numberel = document.querySelectorAll('.number');
const operationel = document.querySelectorAll('.operation');
const equalel = document.querySelector('.equal');
const clearel = document.querySelector('.clear');
const lastclearel = document.querySelector('.last-clear');

let disp1 = '';
let disp2 = '';
let result = null;
let lastOperation='';
let haveDot=false;
let lastop = false;

numberel.forEach(number=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }
        else if(e.target.innerText === '.' && haveDot){
            return;
         }
         

         disp2 += e.target.innerText;
         display2el.innerText=disp2;

    })
})

operationel.forEach(operation=>{
    operation.addEventListener('click',(e)=>{
        if(!disp2) return
        haveDot = false
        const operationName = e.target.innerText
        if(disp1 && disp2 &&lastOperation){
            mathOperation()
        }
        else{
            result = parseFloat(disp2)
        }
       clearVar(operationName)
        lastOperation = operationName
        console.log(result)


    })

})
function clearVar(name = ''){
    disp1 += disp2+ ' '+ name + ' '
    display1el.innerText = disp1
    display2el.innerText = ''
    disp2 = ''
    tempresultel.innerText = result

}
function mathOperation(){
    if(lastOperation==='X'){
    result = parseFloat(result)* parseFloat(disp2)
}
else if(lastOperation === '+'){
    result = parseFloat(result)+parseFloat(disp2)
}
else if(lastOperation === '-'){
    result = parseFloat(result)-parseFloat(disp2)
}
else if(lastOperation === '/'){
    result = parseFloat(result)/parseFloat(disp2)
}
else if(lastOperation === '%'){
    result = parseFloat(result)%parseFloat(disp2)
}}

// display1el.addEventListener('click',(e)=>{
//     if(e.target.innerText.includes('X') && lastop==false) {
//         lastop=true
//     }
//         else if(e.target.innerText.includes('X','+') && lastop){
//             return;
//          }
    
// })
equalel.addEventListener('click',(e)=>{
    if(!disp1 || !disp2) return
    haveDot = false
    if(disp1==0 && lastOperation){
        display1el.innerText = disp1
        
    }
    mathOperation()
    clearVar()
    display2el.innerText = result
    tempresultel.innerText=''
    disp2 = result
    disp1 = ''
})

clearel.addEventListener('click',(e)=>{
    display1el.innerText = '0'
    display2el.innerText = '0'
    disp1 = ''
    disp2 = ''
    result = ''
    tempresultel.innerText = '0'
})
lastclearel.addEventListener('click',(e)=>{
    display1el.innerText = ''
    disp1 = ''
})

window.addEventListener('keydown',(e)=>{
    if(
        e.key === '0'||
        e.key === '1'||
        e.key === '2'||
        e.key === '3'||
        e.key === '4'||
        e.key === '5'||
        e.key === '6'||
        e.key === '7'||
        e.key === '8'||
        e.key === '9'||
        e.key === '.'
      )
{
    clickButton(e.key)//customized function name
        
    }
else if(
    e.key === '+'||
    e.key === '-'||
    e.key === '%'||
    e.key === '/'
){
clickOperation(e.key)  //customized function name
}
else if(e.key==="*")
  { clickOperation('X')}

  else if (e.key === "=" || e.key == 'Enter'){
     clickEqual() 
  }


})

function clickButton(key){
    numberel.forEach(button =>{
        if(button.innerText === key)
         button.click()
    })
}

function clickOperation(key){
    operationel.forEach(button=>{
        if(button.innerText === key)
         button.click()
    })
}

function clickEqual(){
    equalel.click()
}