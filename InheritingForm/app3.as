
'use strict';
var EventEmitter= require('events');


class Greetr extends EventEmitter{
    constructor(){
   super();
    this.greeting= 'Hello World!';
  }
    greet(data){
    console.log(` ${ this.greeting }: ${ data} `);
    this.emit('greet', data);
}
}

function Greetr() {
    EventEmitter.call(this);
    this.greeting= 'Hello World!';

}




var greeter1 =new Greetr();

greeter1.on('greet', function (data) {
    console.log('someone greeted ' + data);


});

greeter1.greet('Tony');


