/* Exercise 2 : Kg And Grams
Instructions
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function declaration and function expression.
Finally, use a one line arrow function and invoke it. */

function converter(value){
    return (value * 1000) + "g" 
}

console.log(converter(2))


const converter2 = function(value){
    return (value * 1000) + "g" 
}

console.log(converter2(3))

/* a function expression is a function attached to a variable whereas as function declaration is declared by itself and can be used on any variable or by itself. */

const converter3 = value => (value * 1000) + "g" 

console.log(converter3(3))