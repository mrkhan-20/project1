/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let valueDisplays= document.querySelectorAll(".num");
let interval= 4900;
valueDisplays.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration= Math.floor(interval/endValue);
    let counter= setInterval(function(){
        startValue+=1;
        valueDisplay.textContent=startValue;
        if(startValue ===  endValue){
            clearInterval(counter,"+");
        }
    },duration);
});

