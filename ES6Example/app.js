'use strict';

class person{
    constructor(firstname, lastname){
        this.firstname=firstname;
        this.lastname=lastname;
    }

    greet(){
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}

var name='chirag';

var greet = 'Hello ' + name;
var greet2= `Hello ${ name }`;

console.log(greet);
console.log(greet2);


var obj={
    name: 'chirag Butani',
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'CHirag'});
obj.greet.apply({name: 'CHirag'});






var ch=new person('Chirag', 'Butani');
ch.greet();

var ch1=new person('Chirag', 'Patel');
ch1.greet();

console.log(ch.__proto__);
console.log(ch1.__proto__);
console.log(ch.__proto__ === ch1.__proto__);