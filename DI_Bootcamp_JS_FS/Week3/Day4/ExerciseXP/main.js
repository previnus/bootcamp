/* Exercise 1 */

let x, y

x = 10
y = 3

if(x > y){
    console.log('x is the greatest number')
}else if(x < y){
    console.log('y is the greatest number')
}else{
    console.log('x is equal to y')
}

/* Exercise 2 */

let newDog = 'Chihuahua'
console.log(newDog.length)

console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if(newDog === 'Chihuahua'){
    console.log('I love Chihuahuas, it’s my favorite dog breed')
}else{
    console.log('I dont care, I prefer cats')
}


/* Exercise 3 */

let number = prompt('enter a number')

mod = number % 2
console.log(mod)

if(mod == 0){
    console.log('x is an even number')
}else{
    console.log('x is an odd number')
} 

/* Exercise 4 */
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
const userLength = users.length
console.log(userLength)

if(userLength == 0){
    console.log('no one is online')
}else if( userLength == 1){
    console.log(`${users[0]} is online`)
}else if( userLength == 2){
    console.log(`${users[0]} and ${users[1]} are online`)
}else{
    remainingUsersLength = userLength - 2
    console.log(`${users[0]} , ${users[1]} and ${remainingUsersLength} more are online`)
}

// using switch statements - alternative

switch(userLength){
    case 0:
        console.log('no one is online')
        break;
    case 1:
        console.log(`${users[0]} is online`)
        break;
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`)
        break;
    default:
        remainingUsersLength = userLength - 2
        console.log(`${users[0]} , ${users[1]} and ${remainingUsersLength} more are online`)
        break;
}
    