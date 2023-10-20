//const is basically constant it can not be change
//this is our variables let or var you can change it after
/* Note- Always use let to declare variable instead of var */
//you can define empty varible or undefined like accountState you can change it after
const accountId = 123444
let accountEmail = "nishchay@gb.com"       
var accountPassword = "32187"               
accountCity = "Delhi"
let accountState;

// accountId = 2  not allowed

accountEmail = "hr@hr.com"
accountPassword = "22"
accountCity = "Shrinagar"

console.log(accountId);
// Table is basically use for print multiple variables
console.table([accountId ,accountEmail ,accountPassword ,accountCity , accountState]);