const path = require('path');

let link = path.join('c:/123/234/456/789/101112', '../../../app1.js')
let link2 = '../ok'

let check =  path.isAbsolute(link);
let check2 =  path.isAbsolute(link2);


console.log(link)