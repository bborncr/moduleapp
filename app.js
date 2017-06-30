var app = require("./credentials");
var pass = require("./credentials").password;

app.say('James');
app.say2('Jaime');

console.log(`Username is: ${app.username}`);
console.log(`Password is: ${app.password}`);
console.log(`The password is ${pass}`);