var greet= require('./greet.js');
greet();


//Objects Example
var person= {
    firstname: 'chirag',
    lastname: 'Butani',
    greet:function () {
        console.log('Hello, '+ this.firstname + ' ' + this.lastname);
    }
};

person.greet();
console.log(person['firstname']);


//function Constructor

function Pe(first, last){
    this.first=first;
    this.last=last;
}

Pe.prototype.gr=function () {
    console.log('Hello, '+ this.first + ' '+ this.last);
};

var ch=new Pe('Chirag', 'Butani');
ch.gr();

//Create other Object
var ch1=new Pe('Chirag', 'Patel');
ch1.gr();

console.log(ch.__proto__);
console.log(ch1.__proto__);
console.log(ch.__proto__ === ch1.__proto__);

//Pass by value
function change(b) {
    b=2;
}

var a=1;
change(a);
console.log(a);

//Pass By Reference
function ChangeObj(d) {
    d.prop1=function () {
        
    };
    d.prop2={};
}

var c={};
c.prop1={};
ChangeObj(c);
console.log(c);


//Invoke Function Expression
(function (lname) {
    var fname='chirag';
    console.log(fname);
    console.log(lname);
}('Butani'));

var fname='cchir';
console.log(fname);