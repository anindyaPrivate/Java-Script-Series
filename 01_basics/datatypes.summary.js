//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// call by value

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// call by Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ====================================================================================================

/************* MEMORY **************/

// Stack = primitive (get copy)     
// Heap = Non Premitive(change in original)


let myName = "Anindya"

let myAnotherName = myName
myAnotherName = "Jill"
// console.log(myName);
// console.log(myAnotherName);

// heap

let userOne = {
    email: "abc@mail.com",
    bank :"Sbi"
}

let userTwo = userOne

userTwo.bank = "Hdfc"
console.log(userOne);
console.log(userTwo);


