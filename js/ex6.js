/*  Homework 4
    Example 6 Javascript code
*/

console.log("Gibson's Output from Example 6");
var y = Math.floor(Math.random() * 100 + 1);
var guess = 1;

function guessNumber(){
    x = Number(prompt("Guess a number between 1-100: "))
    while (x != y){
        if (x > y){
            guess++;
            x = Number(prompt("Too high, guess again:"))
        }
        else if (x < y){
            guess++;
            x = Number(prompt("Too low, guess again:"))
        }
    }
    alert(`Correct! You guessed it after ${guess} times!`)
    console.log(`Correct! You guessed it after ${guess} times!`)
}

guessNumber()