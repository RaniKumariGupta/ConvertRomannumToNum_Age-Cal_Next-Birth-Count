let input = document.getElementById("input");
let submit = document.getElementById("submit");
let errorMsg = document.getElementById("error");
let output = document.getElementById("output");

const RomanObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

 submit.addEventListener("click", () => {
    romanToInteger(input.value);
    input.value = "";
 });

 function romanToInteger(roman){
    let result = 0;
    roman = roman.toUpperCase(); 

    for (let i = 0; i < roman.length; i++) {
        let currentChar = roman[i];
        let nextChar = roman[i + 1];

        if (RomanObject[currentChar] < RomanObject[nextChar]) {
            result += RomanObject[nextChar] - RomanObject[currentChar];
            i++; 
        } else {
            result += RomanObject[currentChar];
        }
    }
    output.innerHTML = result;
    errorMsg.innerHTML = "";
 }