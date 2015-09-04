 /**
 * Created by maoerbaby on 15/9/4.
 */
 var hello = function(){
     console.log('hello world');
 }
 setTimeout(hello,2000);
 console.log('我要马上执行');

 //异步非阻塞IO
 var fs = require('fs');
 fs.readFile('./index.module',function(err,data){
     console.log(err);
     console.log(data);
     console.log(data.toString());
 });
 //同步
 var content = fs.readFileSync('./index.module');
 console.log('next');
