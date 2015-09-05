var fs = require('fs');
fs.readFile('./file',function(err,data){
    console.log(data)
});
//<Buffer 31 32 33>