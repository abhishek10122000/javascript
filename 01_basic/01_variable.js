const accountId=2345678
let accountEmail='abhishek@gmail.com'
var accountPassword='1234'
accountCity='jaypur'

let account; //undefined


// accountId=2456 //not allowed

/*
prefer not to use
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,account])

console.log(accountId);