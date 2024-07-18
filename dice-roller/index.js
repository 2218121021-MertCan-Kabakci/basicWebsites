//let randomNum = Math.floor(Math.random()*6) + 1


let randomNum;
let max = 6;
let min = 1;
const label1 = document.getElementById("dice1")
const label2 = document.getElementById("dice2")
const label3 = document.getElementById("dice3")

document.getElementById("rollBtn").onclick = function(){
     randomNum1 = Math.floor(Math.random()*max) + min
     randomNum2 = Math.floor(Math.random()*max) + min
     randomNum3 = Math.floor(Math.random()*max) + min
     label1.textContent = "dice1: " + randomNum1
     label2.textContent = "dice2: " + randomNum2
     label3.textContent = "dice3: " + randomNum3
}