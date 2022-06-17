const fs = require('fs');

fs.readFile('./1.pdf', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        fs.writeFile('./hello1.txt', data, 'base64url', function () {
            console.log('Da xong')
        })

    }
})

const test2 = fs.readFileSync('./test2.txt', 'utf-8');
fs.writeFileSync('viet2.txt', test2, 'utf-8');
