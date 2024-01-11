// Note:- This is very Important topic in JS you can also read all the Method by yourself

const name = "harry"
const data = 599

// console.log(name + data + " this is the value");   //thsi is old method to concatenate

// console.log(`this is my name ${name} and the number is ${data} and this is the value`)     //this is the modern way to concatenate 


const str = new String('Nishu')          //this is the another method to write a string
// console.log(str.__proto__);    

// //there are some method use in string there are more method to know about them open browser console and run proto
// console.log(str.length);     
// console.log(str.toUpperCase());       
// console.log(str.charAt(1));       


const newstring = str.substring(0, 3)              //you can brake a string into substring
console.log(newstring);

const anotherstring = str.slice(-8, 1)
console.log(anotherstring);

const morestring = "      blahblah     "

console.log(morestring)                
console.log(morestring.trim());                //use for ignore the space 

const webaddress = "this is me "
console.log(webaddress.replace('is', 'Hello'));          //if you want to replace the word in string
