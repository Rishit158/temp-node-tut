// Modules - encapsulated code (only share minimum)
// CommonJs (library under the hood) - every file is a module by default

const names = require("./4_names");
const sayHi = require("./5_utils");
const data = require("./6_alternative_syntax");
// console.log(data);
require("./7_mind_grenade");
// console.log(names)

// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);
