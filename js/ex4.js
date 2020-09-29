/*  Homework 4
    Example 4 Javascript code
*/

console.log("Gibson's Output from Example 4");
var list = []
while (n != "stop") {
    var n = prompt("Enter a word:")
    var n = n.toLowerCase();
    if (n != "stop")
        list.push(n)
}
if (list.length >= 1){  
    console.log(`You entered the following words: \n`)
    for (index = 0; index < list.length; index ++){
        console.log(list[index])
    }
}
else {
    console.log("No words to display, Stop was the first word entered.")
}