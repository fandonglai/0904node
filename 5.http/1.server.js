var http = require('http');
http.createServer(function(req,res){
    res.end('hello');//返回
}).listen(9090);