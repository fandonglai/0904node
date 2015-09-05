var http = require('http');
var mime = require('mime');
var fs = require('fs');
var path = require('path');
http.createServer(function(req,res){
    var url = req.url;
    var urls = url.split('?');
    console.log(urls)
    var pathname = urls[0];
    var query = urls[1];
    var queryObj = {};
    if(query){
        var fields = query.split('&');
        fields.forEach(function(field){
            var vals = field.split('=');
            queryObj[vals[0]] = vals[1];
        })
    }
    if(pathname == '/'){
        res.setHeader('ContentType','text/html')
        fs.readFile('./index.html',function(err,data){
            res.end(data);
        })
    }else if(pathname == '/param'){
        res.end(JSON.stringify(queryObj))
    }else if(pathname == '/favicon.ico'){
        res.end('404');
    }else if(pathname == '/ajax'){
        res.end('国庆')
    }else{
        var filename = '.'+pathname;
        res.setHeader('Content-Type',mime,lookup(exists))
        fs.readFile(filename,function(err,data){
            res.end(data);
        })
    }
    fs.exists(filename,function(exists){
        if(exists){
            fs.readFile(filename,function(err,data){
                res.end(data);
            })
        }else{
            res.end('404你访问的路径不存在');
        }
    })
}).listen(9999);