
const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelcius = document.getElementById("toCelcius")
const result = document.getElementById("result")
let temp;

function convert(){
     if (toFahrenheit.checked) {
          temp = Number(textBox.value);
          temp = temp * 1.8 +32
          result.textContent = temp + "°F"
     }
     else if(toCelcius.checked){
          temp = Number(textBox.value);
          temp = (temp-32)/1.8
          result.textContent = temp + "°C"
     }
     else{
          result.textContent = "select a unit"
     }
}