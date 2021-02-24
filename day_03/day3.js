// Higher Order Function

// 3

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach(function(element){

 console.log(`${element}`)
  }
);


// 4

const names = ['Max', 'Mathias', 'Elias', 'Brook']

names.forEach(function(element){

console.log(`${element}`)
})

// 5 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(function(element){

console.log(`${element}`)
})

// 6 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var maj = countries.map(upperCased)

function upperCased(value) {
  return value.toUpperCase();
}
console.log(maj)

// 7 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var len = countries.map(length)

function length(value) {
  return (value.length);
}
console.log(len)

// 8 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sqrt = numbers.map(sqrtMath)
function sqrtMath(value){

return Math.sqrt(value).toFixed(2);
}
console.log(sqrt)

// 9 

const names = ['Max', 'Mathias', 'Elias', 'Brook']

var Maj = names.map(Up)

function Up(value){

    return value.toUpperCase();
}
console.log(Maj)  

// 10 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

var filtred = countries.filter(endingInLand)
function endingInLand(value){

return value.includes("land") == true || value.includes("Land") == true;
}
console.log(filtred)

// 11

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

var filtred2 = countries.filter(containSixLetters)
function containSixLetters(value){

return (value.length) == 6;
}
console.log(filtred2)

// 12 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

var filtred2 = countries.filter(containSixLetters)
function containSixLetters(value){

return (value.length)  >= 6;
}
console.log(filtred2)

// 13 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

var filtred3 = countries.filter(startsWithE)
var index = 0
function startsWithE(value){

    return (value.charAt())
}
console.log(filtred3)

// 14 skipped

// 15 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var add = numbers.reduce(adding)

function adding(total, number) {

  return total + number;
}
console.log(add)

// 16 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var concat = countries.reduce(concatenating)

function concatenating(accumulator, country ) {

  return `${accumulator} ${country}`
}
console.log(concat)

// 17 

// 18

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var moreThanSeven = countries.some(checkingLength)

function checkingLength(element){
return (element.length);

}
console.log(moreThanSeven)

// 19

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var containsLand = countries.every(hasLand)

function hasLand(element) {
return element.includes("land") || element.includes("Land")

}
console.log(containsLand)

// 20

// 21

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var hasSix = countries.find(finder)

function finder(value){
return (value.length) == 6

}
console.log(hasMoreThanSix)

// 22 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var firstHasSix = countries.findIndex(indexFinder)

function indexFinder(value){
return (value.length) == 6

}

// 23 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var findNorway = countries.findIndex(indexFinder)

function indexFinder(value){
return (value.includes("Norway")) 

}
console.log(findNorway)

// 24 

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
var findRussia = countries.findIndex(indexFinder)

function indexFinder(value){
return (value.includes("Russia")) 

}
console.log(findRussia)

// Sets and Maps
// Level 1
// 1 

var x = new Set()
console.log(x)

// 2 

const x = new Set();

for (var i = 0; i <= 10; i++){

x.add(i);

}
console.log(x)

// 3 

x.delete(6)

// 4 

const x = new Set();

for (var i = 0; i <= 10; i++){

x.delete(i);

}
console.log(x)

// 5 

const countries = ['Finland', 'Sweden', 'Norway']

var y = new Set()
  countries.push("France", "Morocco")

for(let item of countries) {
  
var z = y.add(item) 
}
console.log(z)

// 6  ???
 
// level 2

// Destructuring and Spreading

// Level 1

// 1 
const constants = [2.72, 3.14, 9.81, 37, 100]
const [e ,pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// 2

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, sw, den, nor] = countries

// 3

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const [width, height, area, perimeter] = rectangle

// Level 2
// 1
const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]
  const [user, user2, user3, user4, user5, user6, user7] = users;

// 2 

const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]
const raw = users
  const filtered = Object.keys(raw)


