// var userInput = prompt("Enter a word!");

// if (userInput) {
//     var changeInput = userInput.split('').reverse().join('');
//     if (userInput === changeInput) {
//         alert("The string is a palindrome!");
//     } else {
//         alert("The string is not a palindrome.");
//     }
// } else {
//     alert("No input provided.");
// }



// var word = prompt("Enter the name");
// var lowerCaseWord = word.toLowerCase();

// var reversedWord = lowerCaseWord.split('').reverse().join('');
// if ((reversedWord == lowerCaseWord)) {
//     console.log(`${word} is a palindrome.`);
// } else {
//     console.log(`${word} is not a palindrome.`);
// }


var userInput = prompt("Enter a word!")
var reversedWord;
for (var i = 0; i >= userInput.length; i--) {
    reversedWord = userInput[i]
}
if (userInput === reversedWord) {
    alert("This is not a Palindrome")
} else {
    alert("This is a Palindrome")
}

// var t=prompt("Enter the word");
// var a=[];
// var j=0;
// for(var i=t.length-1;i>=0;i--){
//         a[j++]=t[i]
// }
// console.log(a);
// var na=[];
// for(var i=0;i<t.length;i++){
//     na[i]=t[i];
// }
// var flag=false;
// console.log(na);
// var si=0;
// var ei=t.length-1;
// if(a[si]==na[si]){
//     flag=true;
//     si++;
// }
// else{
//     flag=false;
// }

// if(flag==true){
//     console.log("Pallindrome");
// }
// else{
//     console.log("Not aPallindrome");
// }