/*  Homework 4
    Example 5 Javascript code
*/

console.log("Gibson's Output from Example 5");

function palindrome(str) {
    var str = str.toLowerCase()
    return str == str.split('').reverse().join('');
}

function numVowels(str) {
    var vowel_list = 'AEIOUaeiou';
    var count = 0
    
    for(var x = 0; x < str.length; x++) {
        if (vowel_list.indexOf(str[x]) !== -1) {
            count += 1;
        }
    }
    return count;
} 

function main(){
    var str = prompt("Enter a word: ")
    if (palindrome(str)) {
        alert(`${str} contains ${numVowels(str)} vowels and is a palindrome`)
        console.log(`${str} contains ${numVowels(str)} vowels and is a palindrome`)
    }
    else {
        alert(`${str} contains ${numVowels(str)} vowels and is not a palindrome`)
        console.log(`${str} contains ${numVowels(str)} vowels and is not a palindrome`)
    }
}
main()