var Emitter= require('./emitter');
var eventconfig=require('./config');

var emtr=  new Emitter();

emtr.on(eventconfig.GREET, function () {
    console.log('somewhere , someone said hello');
});

emtr.on(eventconfig.GREET, function () {
   console.log('A greting occured');
});

console.log('Hello!');
emtr.emit(eventconfig.GREET);


var person={
    firstname:'',
    lastname: '',
    greet: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

// Object and Prototype
var ch=Object.create(person);
ch.firstname='chirag';
ch.lastname='Butani';

var ch1=Object.create(person);
ch1.firstname='chirag';
ch1.lastname='Patel';

console.log(ch.greet());
console.log(ch1.greet());