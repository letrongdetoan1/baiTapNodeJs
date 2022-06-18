const fs = require('fs');
fs.readFile('./api/demo.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        fs.writeFile('./api/newFile.txt', data, function () {
            console.log('Đã ghi xong')
        })
    }
})