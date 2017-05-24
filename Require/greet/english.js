var greetoings= require('./greetings.json');

var greet=function () {
    console.log(greetoings.en);
}

module.exports= greet;