var buf1 = new Buffer(12);
buf1.fill(0,1,3)
console.log(buf1);

var buf2 = new Buffer([1,2,3]);
console.log(buf2);

var buf3 = new Buffer('珠峰培训');
console.log(buf3);

//字符是可见的  汉字英文
//字节是数量单位0-255之间
//0xff 0x代表16进制

//长度
var str = '珠峰培训';
var buf = new Buffer(str);
console.log(str.length);
console.log(buf.length);

str[0] = '我';
buf[0] = 0xff;
console.log(str,buf);
//字符串是值类型  不会改变  数组是引用类型  改变

var subs = str.slice(1,2);
var subb = buf.slice(1,2);
subb[0] = 0xfff;
console.log(subb);

var buf4 = new Buffer('珠峰培训');
console.log(buf4.toString('ascii'));
console.log(buf4.toString('utf8',3,9));
//ascii一共指定了255个字符
//gbk node不支持

var buf5 = new Buffer(12);
buf5.write('珠峰',0,3);//第三个参数代表长度
buf5.write('培训',3,3);
console.log(buf5.toString());

var buff1 = new Buffer('珠峰');
var buff2 = new Buffer('培训');
console.log(Buffer.concat([buff1,buff2],13));
console.log(Buffer.concat([buff1,buff2]));
console.log(Buffer.concat([buff1,buff2],14));
console.log(Buffer.concat([buff1,buff2],15));

//1024bit  1Kb   1024K 1M
var buff3  = new Buffer(6);
buff2.copy(buff3,0,0,6);//源的目标  源
console.log(buff3.toString())

console.log(buff3 instanceof Buffer);//instanceof原型链

console.log(Buffer.isBuffer(buff3));
console.log(Buffer.byteLength())



















