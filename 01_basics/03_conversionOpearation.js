let score = 45

// console.log(score);
// console.log(typeof(score))

let score1 = "45"
// console.log(score1);
// console.log(typeof(score1))

// convert string to number
let valueInNumber = Number(score1)

// console.log(typeof(valueInNumber))


// not converting respond NaN
let score2 = "45abc"
let valueInNumber1 = Number(score2)
// console.log(typeof(valueInNumber1))
// console.log(valueInNumber1);

// Null covert 0
let score3 = null
let valueInNumber2 = Number(score3)
// console.log(typeof(valueInNumber2))
// console.log(valueInNumber2);

// for undefined respond NaN
let score4 = undefined
let valueInNumber3 = Number(score4)
// console.log(typeof(valueInNumber3))
// console.log(valueInNumber3);

// for boolean True = 1 False = 0

let isLoggedIn = 1   // emapty or 0  mean return false 
                     //"" = Flase
                     //"anindya" = true

let booleanIsloggedin = Boolean(isLoggedIn)
// console.log(booleanIsloggedin);

let somenumber = "45"
let stringNumber = String(somenumber)
console.log(stringNumber)
console.log(typeof(stringNumber))
