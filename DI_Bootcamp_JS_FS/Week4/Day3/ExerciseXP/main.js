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

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

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

/* Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1
 */


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

const myBill = (list, stock, prices) => {

    let availableListArr = []
    let sum = 0
    //check if shopping list is found in stock and reduce stock if found
    for(let i = 0; i < shoppingList.length; i++){
        for(const property in stock) {
            if(shoppingList[i] == property && stock[property] != 0){
                stock[property] = stock[property] - 1 //reduce stock by 1
                availableListArr.push(property)
                //console.log(stock[property])
            }
          }
    }

    console.log(stock)


    for(let p = 0; p < availableListArr.length; p++){
        for(const fruit in prices){
            //console.log(fruit)
            if(availableListArr[p] == fruit){
                console.log(prices[fruit])
                sum += prices[fruit]
            }
        }
    }

    console.log(sum)
    console.log(stock)

    return `Total Bill amount is $${sum}`

}

let shopping = myBill(shoppingList, stock, prices)
console.log(shopping)


/* Exercise 5 */

/* A quarters is 0.25
A dimes is 0.10
A nickel is 0.05
A penny is 0.01 */

//changeEnough(4.25, [25, 20, 5, 0])

const changeEnough = (itemPrice, amountOfChange) => {

    sumOfQuarters = amountOfChange[0] * 0.25
    sumOfDimes = amountOfChange[1] * 0.10
    sumOfNickel = amountOfChange[2] * 0.05
    sumOfPenny = amountOfChange[3] * 0.01

    sumOfChange = sumOfQuarters + sumOfDimes + sumOfNickel + sumOfPenny

    if(sumOfChange >= itemPrice){
        return true
    }else{
        return false
    }

}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(10.25, [25, 20, 5, 0]))


/* Exercise 6 */

/* Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.

 */

const hotelCost = () =>{
    let text = "" 
    text = prompt("please enter number of nights")

    while(isNaN(text) || text.length < 1){
        console.log(text)
        text = prompt("please enter number of nights")
    }

    
    text = parseInt(text) * 140
    
    return text
}

//const hotel = hotelCost()
//console.log(hotel)

/* 

Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$


*/

const planeRideCost = () =>{
    let text = "" 
    let destination = ""
    text = prompt("What is your destination")

    while(!isNaN(text) || text.length < 1 ){
        console.log(text)
        text = prompt("What is your destination")
    }
    
    if(text === "London"){
        destination = `183$`
    }else if(text === "Paris"){
        destination = '220$'
    }else{
        destination = '300$'
    }
    
    return destination
}

/* const ride = planeRideCost()
console.log(ride) */


/*


Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

*/
const rentalCarCost = () =>{
    let text = "" 
    let rental = ""
    text = prompt("Number of days you would like to rent a car")

    while(isNaN(text) || text.length < 1 ){
        console.log(text)
        text = prompt("Number of days you would like to rent a car")
    }
    
    if(text <= 10){
        rental = text * 40
    }else{
        rental = (text * 40) * ((100-5)/100)
    }
    
    return rental
}

/* const rental = rentalCarCost()
console.log(rental) */


/*
Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

*/

const totalVacationCost = () => {
    let x = rentalCarCost()
    let y = hotelCost()
    let z = planeRideCost()

    let result = `The car cost: ${x}$, the hotel cost: ${y}$, the plane tickets cost: ${z}.`

    return result
}

/* result = totalVacationCost()
console.log(result) */
/*

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly. */

const hotelCostBonus = (text) =>{
    
    text = parseInt(text) * 140
    
    return text
}


const planeRideCostBonus = (text) =>{
    
    if(text === "London"){
        destination = `183$`
    }else if(text === "Paris"){
        destination = '220$'
    }else{
        destination = '300$'
    }
    
    return destination
}

const rentalCarCostBonus = (text) =>{
    
    if(text <= 10){
        rental = text * 40
    }else{
        rental = (text * 40) * ((100-5)/100)
    }
    
    return rental
}

const totalVacationCostBonus = () => {
    let x = y = z = rental = hotel = plane = ""

    //Rental Car Cost
    x = prompt("Number of days you would like to rent a car")

    while(isNaN(x) || x.length < 1 ){
        x = prompt("Number of days you would like to rent a car")
    }

    rental = rentalCarCostBonus(x)

    // Hotel Cost
    y = prompt("please enter number of nights")

    while(isNaN(y) || y.length < 1){
        y = prompt("please enter number of nights")
    }
    hotel = hotelCostBonus(y)


    // Plane Flight Cost 
    z = prompt("What is your destination")

    while(!isNaN(z) || z.length < 1 ){
        z = prompt("What is your destination")
    }
    
    plane = planeRideCostBonus(z)

    let result = `The car cost: ${rental}$, the hotel cost: ${hotel}$, the plane tickets cost: ${plane}.`

    return result
}

const vacationBonus = totalVacationCostBonus()
console.log(vacationBonus)