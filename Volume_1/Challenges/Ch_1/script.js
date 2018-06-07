var johnHeight = 185;
var johnAge = 25;

var jimHeight = 192;
var jimAge = 28;

var johnScore = johnHeight + 5 * johnAge;
var jimScore = jimHeight + 5 * jimAge;

if (johnScore > jimScore){
    console.log("John wins with score of: " + johnScore);
} else if(johnScore < jimScore){
    console.log("Jim wins with score of: " + jimScore);
}else {
    console.log("It's a draw! Both players have score of " + johnScore);
}
