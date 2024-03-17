const clock=document.getElementById('clock')

//const clock=document.querySelector('#clock')

// let date=new Date(); 
//dont take date value here other wise it will take the value only once and you will see only one time

setInterval(function(){
 let date=new Date(); clock.innerHTML=date.toLocaleTimeString()},1000)