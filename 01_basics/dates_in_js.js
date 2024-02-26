// Dates
//date=object

// let date = new Date()
// console.log(date);
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.getHours());
// console.log(date.getTimezoneOffset());

// let newdate = new Date(2023,0,22);
// console.log(newdate.toDateString()); 

// let currentdate = new Date("1-1-2023")
// console.log(currentdate.toDateString());

// let a = Date.now()
// console.log(a);
// console.log(currentdate.getTime());        //convert in milesecound

// console.log(Math.floor(Date.now()/1000));

let exactDate = new Date();
// console.log(exactDate);
// console.log(exactDate.getFullYear());
// console.log(exactDate.getDay());

// `${exactDate.getDay()} and the time is`           this is in string interplution

// Note:-you can edit the localestring by these method and many more method is also available but this is important like shows in below code
exactDate.toLocaleString('default',{
    dateStyle:"long",
    timeStyle:'medium'

})