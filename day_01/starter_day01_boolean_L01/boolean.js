var firstName = 'Ziad';
var lastName = 'Choukri';
var country = 'Morocco';
var city = 'Oujda';
var age = 20;
var isMarried = false;
var year = null; 

console.log(typeof firstName) 
console.log(typeof  lastName)
console.log(typeof  country)
console.log(typeof city)
console.log(typeof  age)
console.log(typeof isMarried)
console.log(typeof year) // 1

'10' == 10 // --> true // 2

parseInt('9.8') == 10 // --> false // 3

console.log('hello'.includes('o')) // 4.1
console.log(79 == 70 + 9)
console.log(null === null) 

console.log('hello' === 'hola') // 4.2
console.log('Hello World' == 'hello world')
console.log('78' + 1 == 79) 

console.log(4 > 3) // 5
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length)
console.log('jargon'.length)
console.log('jargon' == 'python')

console.log(4 > 3 && 10 < 12) // 6 
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('dragon'.includes('on'))
console.log('python'.includes('on'))

var D = new Date() // 7
var date1 = new Date("1/1/1970");
var date2 = new Date("2/11/2021");
var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 