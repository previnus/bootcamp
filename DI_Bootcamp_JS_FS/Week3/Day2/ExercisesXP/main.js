/* Exercise 1 */

const favoriteFood = 'chocolate'
const meal = 'dinner'

console.log(`I eat ${favoriteFood} at every ${meal}`)

/* Exercise 2 */

/* Part 1 */

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]

myWatchedSeriesLength = myWatchedSeries.length;

console.log (myWatchedSeriesLength)

myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`

console.log(myWatchedSeriesSentence)

console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`)

/* Part 2 */

let index = myWatchedSeries.indexOf('the big bang theory')
console.log(index)

myWatchedSeries.splice(index, 1, 'friends')

console.log(myWatchedSeries)



console.log(myWatchedSeries)

myWatchedSeries.push('suits')

console.log(myWatchedSeries)

myWatchedSeries.unshift('breaking bad')

console.log(myWatchedSeries)

myWatchedSeries.splice(1,1)

console.log(myWatchedSeries)

text = 'money heist'
console.log(text.indexOf('n'))

console.log(myWatchedSeries)

/* Exercise 3 */

/* Store a celsius temperature into a variable.

Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32 */

let valueC, valueF

valueC = 30
valueF = ((valueC/5)*9)+32

console.log(valueF)

console.log(` ${valueC}°C is ${valueF}°F.`)


/* Exercise 4 */

/* Instructions
For each expression, predict what you think the output will be in a comment (//) without first running the command.
Of course, explain each prediction.
Then run the expression in the console. Note the actual output in a comment and compare it with your prediction */

//Using the code below:

let c;
let a = 34;
let b = 21;



/* What will be the outcome of a + b in the first expression ? */
console.log(a+b)
// Prediction: 34 + 21 = 55
// Actual: 55

/* What will be the outcome of a + b in the second expression ? */
a = 2;
console.log (a+b)
// Prediction: new variable value is taken into account, so 2 + 21 = 23
// Actual: 23


/* What is the value of c? */
console.log(c)
// Prediction: value of c exists but is not defined by a value, so my guess its undefined
// Actual: undefined

/* Analyse the code below, what will be the outcome?*/
console.log(3 + 4 + '5'); 
// Prediction: 3 + 4 are numeric value so the outcome will be 7 + concatenated with string 5, the value would be 75
// Actual: 75


/* Exercise 5 */

typeof(15)
console.log(typeof(15))
// Prediction: number
// Actual: number

typeof(5.5)
console.log(typeof(5.5))
// Prediction: float
// Actual: number

typeof(NaN)
console.log(typeof(NaN))
// Prediction: Undefined
// Actual: number

typeof("hello")
console.log(typeof("hello"))
// Prediction: string
// Actual: string

typeof(true)
console.log(typeof(true))
// Prediction: boolean 
// Actual: boolean

typeof(1 != 2)
console.log(typeof(1 != 2))
// Prediction: boolean (true or false)
// Actual: boolean

"hamburger" + "s"
console.log("hamburger" + "s")
// Prediction: hamburgers (concatenation of strings)
// Actual: hamburgers

"hamburgers" - "s"
console.log("hamburgers" - "s")
// Prediction: NaN (mathematical operators not working with strings)
// Actual: NaN

"1" + "3"
console.log("1" + "3")
// Prediction: 13 (strings are being concatenated)
// Actual: 13

"1" - "3"
console.log("1" - "3")
// Prediction: js detects numbers even if its wraps in strings
// Actual: -2

"johnny" + 5
console.log("johnny" + 5)
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
console.log("johnny" - 5)
// Prediction: NaN (strings cannot be substracted to number)
// Actual: NaN

99 * "hello"
console.log(99 * "hello")
// Prediction: NaN (mathematical operators cannot work with strings)
// Actual:

1 != 1
console.log(1 != 1)
// Prediction: false
// Actual: false

1 == "1"
console.log(1 == "1")
// Prediction: true (not checking for types)
// Actual: true

1 === "1"
console.log(1 != 1)
// Prediction: false (invalid type)
// Actual: false



/* Exercise 6 */

5 + "34"
console.log(5 + "34")
// Prediction: 39
// Actual: 534

5 - "4"
console.log(5 - "4")
// Prediction: 1 (js is smart enough to convert numbers from strings)
// Actual: 1

10 % 5 
console.log(10 % 5)
// Prediction: 0 (modulus - no remaining value)
// Actual: 0

5 % 10
console.log(5 % 10)
// Prediction: (modulus - 5 remains out of 10)
// Actual: 5

"Java" + "Script"
console.log("Java" + "Script")
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
console.log(typeof(" " + " "))
// Prediction: two spaces/zero value
// Actual: empty string

" " + 0
console.log(" " + 0)
// Prediction: 0
// Actual: 0

true + true
console.log(true + true)
// Prediction: true
// Actual: 2

true + false
console.log(true + false)
// Prediction: 1
// Actual: 1

false + true
console.log(false + true)
// Prediction: 1
// Actual: 1

false - true
console.log(false - true)
// Prediction: 0
// Actual: -1

!true
console.log(!true)
// Prediction: false
// Actual: false

3 - 4
console.log(3 - 4)
// Prediction: -1
// Actual: -1

"Bob" - "bill"
console.log("Bob" - "bill")
// Prediction: NaN (cannot use mathematical operators on strings)
// Actual: NaN



