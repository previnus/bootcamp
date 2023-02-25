/* Exercise 1  */

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift()

console.log(fruits)

fruits.sort()



console.log(fruits)

fruits.push('kiwi')

console.log(fruits)

fruits.splice(0,1)

fruits.reverse()

console.log(fruits)


/* Exercise 2 */

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

/* Method 1 */
let oranges = moreFruits[1][1].toString()
console.log(oranges)

/* Method 2 */
console.log(moreFruits[1][1][0])