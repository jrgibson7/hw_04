/*  Homework 4
    Example 1 Javascript code
*/

console.log("Gibson's Output from Example 1");
function Calculator (a,b,c) {
    while (isNaN(a)){
        a = Number(prompt("Enter a number: "));
        if (isNaN(a)){
            alert("Must input number")
        }
    }

    while (isNaN(b)){
        b = Number(prompt("Enter a second number: "));
        if (isNaN(b)){
            alert("Must input number")
        }
    }
    var ops = ["+", "-", "*", "/"]
    while (ops.includes(c) === false){
        c = String(prompt("Enter a Mathematical Operation (+, -, *, /)"))
        if (ops.includes(c) === false){
            alert("Invalid input")
        }
    } 
    switch (c){
        case "+":
            console.log(`${a} + ${b} = ${a + b}`);
            break;
        case "-":
            console.log(`${a} - ${b} = ${a - b}`);
            break;
        case "*":
            console.log(`${a} * ${b} = ${a * b}`);
            break;
        case "/":
            console.log(`${a} / ${b} = ${a / b}`);
            break;
    }  
    }    
  
Calculator()