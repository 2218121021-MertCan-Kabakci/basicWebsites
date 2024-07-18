const check = document.getElementById("check");
const visaBtn =  document.getElementById("visaBtn");
const masterBtn =  document.getElementById("masterBtn");
const troyBtn =  document.getElementById("troyBtn");
const mySubmit =  document.getElementById("mySubmit");
const subResult =  document.getElementById("subResult");
const payResult =  document.getElementById("payResult");

mySubmit.onclick = function(){
     if (check.checked) 
          {    
          if(visaBtn.checked){
               subResult.textContent = "you are subscribed";
               payResult.textContent = "you are paying with visa"
          }
          else if(masterBtn.checked){
               subResult.textContent = "you are subscribed";
               payResult.textContent = "you are paying with master"
          }
          else if(troyBtn.checked){
               subResult.textContent = "you are subscribed";
               payResult.textContent = "you are paying with troy"
          }
          else{
               payResult.textContent = "select a paymnet type"
          }
          }
     else{
          subResult.textContent = "you are not subscribed";
     }

     
}