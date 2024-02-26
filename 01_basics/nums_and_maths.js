const num = 3333                               //this is also a number but don't show in output
console.log(num);

const amount = new Number(123)                 //you can define number officially 
console.log(amount);

//number has also some properties like string
console.log(amount.toString());              //
console.log(amount.toFixed(3));              //us for add . in your number

const amount2 = 33322.3
console.log(amount2.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));       //this is use for add coma in your number
// ('en-IN') is use for convert coma into indian version by default its an american standard


//***************  MATHS  ********************** */

// console.log(Math);
// console.log(Math.abs(-3));       //convert - into +
// console.log(Math.round(4.6));    //convert into decimal acording to the value of number
// console.log(Math.ceil(3.3));     //print 4
// console.log(Math.floor(3.1));    //print 3
// console.log(Math.min(3,2,1,6));  //give the minimum value
// console.log(Math.max(3,4,6,8,9)); //give the maximum value


// console.log(Math.random());             //gives a random number between o and 1
console.log(Math.floor((Math.random()*10) +1))

const min = 5
const max = 10
console.log(Math.floor(Math.random()*(max-min+1)+min));


                                                    