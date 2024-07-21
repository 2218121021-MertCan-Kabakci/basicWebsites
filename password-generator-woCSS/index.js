function passwordGenerator(){
     const result = document.getElementById("result")
     const length = input.value
     const lowerId = document.getElementById("lowerId")
     const upperId = document.getElementById("upperId")
     const numberId = document.getElementById("numberId")
     const symbolId = document.getElementById("symbolId")

     let includeLower = false;
     let includeUpper = false;
     let includeNumbers = false;
     let includeSymbols = false;
     
     if (lowerId.checked) {
          includeLower = true;
     }
     if (upperId.checked) {
          includeUpper = true;
     }
     if (numberId.checked) {
          includeNumbers = true;  
     }
     if (symbolId.checked) {
          includeSymbols = true;
     }

     const lowercaseChars = "abcdefghijklmnopqrstuvwyz";
     const upperChars = lowercaseChars.toUpperCase();
     const numbers = "0123456789";
     const symbols = "!#$&*+-/()=^_%";

     let password = "";
     let alloweds = "";

     alloweds += includeLower ? lowercaseChars : "";
     alloweds += includeUpper ? upperChars : "";
     alloweds += includeNumbers ? numbers : "";
     alloweds += includeSymbols ? symbols : "";

     for (let index = 0; index < length; index++) {
          p = Math.floor(Math.random() * alloweds.length);
          password += alloweds[p];
          
     }
     if(includeLower == false &&
     includeUpper == false &&
     includeNumbers == false &&
     includeSymbols == false )
     {
          password = "you have to pick at least one";
     }
     if (length<=0) {
          password = "length must be over 0";
     }
     result.textContent = password; 
}