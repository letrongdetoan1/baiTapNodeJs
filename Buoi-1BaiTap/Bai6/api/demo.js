const { test } = require('../sum');

for (let index = 0; index < test.length; index++) {
    if (test[index] > 5) {
        console.log(test[index])
    }
}

for (const iterator of test) {
    if (iterator > 5) {
        console.log(iterator)
    }
}

let result = test.filter(element => {
    return element > 5
})

console.log(result)

let push7 = [...test];
push7.push(7);

console.log(push7)

let resultDiv2 = test.filter(ele => {
    return ele % 2 === 0
})

console.log(resultDiv2)