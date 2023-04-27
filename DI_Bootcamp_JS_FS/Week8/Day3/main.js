/* Exercise 1 */

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}

let keys = Object.keys(myObj)

console.log(keys.length)

let values  = Object.values(myObj)

console.log(values.length)

/* Method 1 */

for(let i = 0; i < keys.length; i++){
    console.log(`The ${i} key is : ${keys[i]}, The ${i} value is : ${values[i]}`)
}

/* Method 2 */
let length = 0

for(let x in myObj){
    console.log(`The ${length} key is : ${x}, The ${length} value is : ${myObj[x]}`)
    length++
}