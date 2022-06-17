const fs = require('fs');

fs.appendFileSync('./test.txt', 'hello', function(){})