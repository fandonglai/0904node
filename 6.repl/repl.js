var repl = require('repl');
var server = repl.start({});
var context = server.context;//就是globle
context.name = 'zfpx';
context.age= 6;
context.grow = function(){

}
