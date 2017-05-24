
'use strict';

var Greetr = require('./greetr');
function Greetr() {
    EventEmitter.call(this);
    this.greeting= 'Hello World!';
}

var greeter1 =new Greetr();

greeter1.on('greet', function (data) {
    console.log('someone greeted ' + data);

});

greeter1.greet('Tony');


