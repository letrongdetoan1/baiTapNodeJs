const { test } = require('./api/demo');

console.log(test.length);

let arrayNew = test.map((element, index) => {
    return element * 2
})

console.log(arrayNew);