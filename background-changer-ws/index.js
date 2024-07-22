// arrays, document.getElementById() , document.querySelector(),addEventListener(),document.body.style.backgroundColor

const hex_values = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//var button = document.querySelector("#btn");
btn.addEventListener("click", function(){
     color.textContent = value();
     document.body.style.background = value();
})

function value(){
     let rast = 0;
     let hex= "#";
     for(let i =0;i<6;i++){
          rast = Math.floor(Math.random()*hex_values.length);
          hex += hex_values[rast];
     }
     return hex;
}

