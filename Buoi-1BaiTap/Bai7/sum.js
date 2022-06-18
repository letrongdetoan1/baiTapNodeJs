const { person } = require("./api/demo")

const person2 = {
    name: "Thái",
    age: 12,
    car: "BWM",
    price: "30000 USD"
}

var eq = JSON.stringify(person) === JSON.stringify(person2)

console.log(eq)
