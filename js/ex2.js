/*  Homework 4
    Example 2 Javascript code
*/

console.log("Gibson's Output from Example 2");
function circle(radius){
    this.radius = radius;
    this.area = function(){
        return Math.PI * (this.radius ** 2)
    };
    this.circumference = function() {
        return 2 * Math.PI * this.radius;
    }

}
while (isNaN(c)){
    c = Number(prompt("Enter a circle's radius: "));
    if (isNaN(c)){
        alert("Please enter a number")
    }
    }
var c = new circle(c)
console.log(`Its circumference is ${c.circumference().toFixed(2)}`);
console.log(`Its area is ${c.area().toFixed(2)}`);