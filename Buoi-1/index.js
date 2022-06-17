const fs = require('fs');

const data = fs.copyFileSync('./hello.txt', './hw2lo1011.txt')
console.log(data)