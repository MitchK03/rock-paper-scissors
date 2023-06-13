var wins = 0
var losses = 0
var ties = 0

var choices = ["R", "P", "S"]

var humanchoice = prompt("Choose R, P, or S")
console.log(humanchoice)

var randomNum = Math.floor( Math.random()* 3)
console.log( choices[randomNum])