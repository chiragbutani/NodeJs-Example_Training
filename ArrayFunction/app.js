// Object Properties and Methods

var obj = {
    greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);

var prop= 'greet';
console.log(obj[prop]);


//functions and arrays

var arr=[];

arr.push(function () {
    console.log('Hello World1')
});

arr.push(function () {
    console.log('Hello World2')
});

arr.push(function () {
    console.log('Hello World3')
});

arr.forEach(function (item) {
    item();
});