/* Exercise 1 */


/* Part I : function with no parameters

Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function. */

const infoAboutMe = () => console.log('Hi, my name is Previn and am 36years old')

infoAboutMe()

/* Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
 */

const infoAboutPerson = (personName, personAge, personFavoriteColor) => {
    console.log(`Your name is ${personName}, you are ${personAge} and your favorite color is ${personFavoriteColor}`)

}

infoAboutPerson("john", 36, "white")

/* Exercise 2 */

/* John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function. */



const calculateTip = () => {
    let bill, tip

    bill = parseInt(prompt("Enter your bill"))

    if(bill < 50 ){
        tip = bill * (20/100)
    }else if(bill >= 50 && bill <= 200){
        tip = bill * (15/100)
    }else{
        tip = bill * (10/100)
    }

    console.log(`Tip amount is $${tip} and Final bill amount is $${bill + tip}`)
}

//calculateTip()


/* Exercise 3 */

/* Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.

Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
391 414 437 460 483
Sum : 5313

*/

/* const isDivisible = () => {
    
    let sum = 0
    let string = "Outcome : "

    for( let i = 0; i< 500; i++){
        let checkResult = i / 23

        checkResult = Number.isInteger(checkResult)

        if(!checkResult){
            continue;
        }
        sum += i
        string += i + " "
    }

 console.log(string + "\n" + "Sum : " + sum)

}

isDivisible() */


/*  
Bonus: Add a parameter divisor to the function.

isDivisible(divisor)

Example:
isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
isDivisible(45) : Console.log all the numbers divisible by 45, and their sum */

const isDivisible = (divisor = 23) => {
    
    let sum = 0
    let string = "Outcome : "

    for( let i = 0; i< 500; i++){
        let checkResult = i / divisor

        checkResult = Number.isInteger(checkResult)

        if(!checkResult){
            continue;
        }
        sum += i
        string += i + " "
    }

    let result = string + "\n" + "Sum : " + sum
    return result
}

let number3 = isDivisible(3)
let number45 = isDivisible(45)
console.log(number3)
console.log(number45)


/* Exercise 4 */

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

shoppingList = ["banana", "orange", "apple"]

const myBill = () => {
    shoppingList = ["banana", "orange", "apple"]

    if(!Array.isArray(shoppingList)){
        return false;
    }

    
}

myBill()