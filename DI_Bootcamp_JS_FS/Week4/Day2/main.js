/* Function */

const addNumber = (num1, num2) => {
    const result = num1 + num2
    return result
}

console.log(addNumber(12, 13))

let x = addNumber(25,10)

console.log(x)

/* Exercise 1 */

const age = (myAge) => {
    let mumAge, dadAge
    mumAge = myAge * 2
    dadAge = mumAge * 1.2

    console.log(`Mum age is ${mumAge} and Dad age is ${dadAge}`)
}

age(30)


/* Return Statement */

const newAge = (myAge) => {
    let mumAge, dadAge
    mumAge = parseInt(myAge * 2)
    dadAge = parseInt(mumAge * 1.2)

    return `Mum age is ${mumAge} and Dad age is ${dadAge}`
}

console.log(newAge(36))

const greeting = (username) => {
    let result
    if(username === "Sarah"){
        return result =  "Hello Sarah"
    } // the first return would be taken into account if this check is true else the other return would be taken into account

    return result = `Hey ${username}`
}

console.log(greeting("Sarah"))
console.log(greeting("John"))


/* IMPORTANT FUNCTION CAN BE NESTED INSIDE ANOTHER FUNCTION */

const add = (num1, num2) => {
    const getNum =  (num1) => {
        let calc
        return calc = num1 * num1
    }

    const result = getNum(num1) + num2
    return result
}

let xyz = add(2, 3)
console.log(xyz)



/* Exercise 2 */


/* 1. Create a structured HTML file linked to a JS file

2. Write a Javascript function that takes a parameter: myAge

3. In the function, return the age of my mum (my mum is twice my age)

4. Call the function

5. In the global scope, console.log the result of the function */


const myAge2 = (myAge) => {
    mumAge = myAge * 2
    return mumAge
}

let john = myAge2(30)
console.log(john)


/* Object Methods */

let person = {
    fname: 'bob',
    lname: 'johnson',
    getfullname: function() {
        return `${person.fname} ${person.lname}`
    },
    getfull: function() {
        return `${this.fname} ${this.lname}`
    }
}



console.log(person.fname)
console.log(person.lname)
console.log(person.getfullname())
console.log(person.getfull())


/* IMPORTANT

use of fat arrow function inside object would not reference the object

It would return Undefined

 */

let persondata = {
    firstName : "Sarah",
    eyeColor: "blue",
    eat : () => {
        console.log("My name is" + this.firstName + "I love chocolate")
    }
}
persondata.eat()

