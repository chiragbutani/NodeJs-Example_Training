var buf = new Buffer('Hello', 'utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());

// Array Type Buffer Data
var buffer = new ArrayBuffer(12);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
view[2] = 25;
console.log(view);


