// LOOPS

/* For Loop */
    /* Syntax 
        for (statement 1; statement 2; statement 3) {
        // code block to be executed
        }
    */

const arrayTest = [1,2,3,4,5,6,7]

for(let i = 0; i < arrayTest.length; i++){
    const element = arrayTest[i] 
    console.log(i)
}

/* Exercise 1 */
const lastVal = 15

for (let x = 1; x < lastVal; x++) {
    if(x % 2 === 0){
        console.log(`${x} is even`)
    }else{
        console.log(`${x} is odd`)
    }   
}

/* 
Side Note 

Constant (const) exists only within the scope and so when the array itinerate, it wont affect the const and prevent it from being generated 
*/

/* For/In Loop */
//loop in objects keys and values

    /* Syntax 
        for (variable in object)
        "statement"
    */
/*         
Loops through the properties of an object. This loop continues until all of the properties of the Object are processed.

Loops also through the index of an array. This loop continues until all of the elements of the array are processed. 
*/

let person = {fname:"John", lname:"Doe", age:25};
    for (let x in person) {
        console.log(x) //fname lname age
        console.log(person[x]) // John Doe 25
    }


let colors = ["blue", "yellow", "red", "green", "purple", "orange"];

for(let i in colors){
    //display number of iterations
    console.log(i)

    //display each colors in the array
    console.log(colors[i])
}


/* For/Of Loop */

/* 
Loops through the values of an iterable objects such as Arrays and Strings.

Careful: an object is not iterable
*/
    /* Syntax 
        for (variable of object){
            statement
        }
    */

        let list = [4, 5, 6];

        for (let i in list) {
           console.log(i); // "0", "1", "2",
           console.log(list[i])
        }
        
        for (let i of list) {
           console.log(i); // "4", "5", "6"
        }

/*      
`for in` --> list[i] is same as `for of` --> i
            
Basically for in return the length in the array and for ... of returns the values in the list 
*/

/* IMPORTANT NOTE 
 - For/Of loop DOES NOT WORK for objects
 - For/In loop DOES WORK for objects

 //for of doesn't work for object
let person = {fname:"John", lname:"Doe", age:25};
for (let x of person) {
  console.log(x) 
} // Error: object is not iterable
 */


/* While Loop */
// allow code to be executed repeatedly based on a boolean condition compared to for loop which follows a numerical condtion

/* 
    Syntax 
        while (boolean condition){
            loop statements...
        }
*/

let n = 0;
while (n <= 10) {
  n++;
  console.log(n)
}
// Note: While loop checks the conditions before entering the loop


/* Do While Loop */

/* Similar to while loop, but it checks for condition after executing the statements. This is an of Exit Control Loop.
The test condition is tested or evaluated at the end of the loop body. Therefore, the loop body will execute whether the test condition is true or false at least once. */

/* Syntax
    do{
        // statements..
    }while (condition); 
*/

let i = 0;
do {
  console.log("The number is " + i)
  i++;
}
while (i <= 10);
// Note: Do ... while will run the first iteration no matter what and then check the condition

//Objects Loop

const user = {
    fname : 'john',
    lname : 'doe',
    age : '34'
}

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//break the loop if a certain condition is met
//use to get out of a loop before the complete loop is done
for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        break;
      }
    console.log("The number is " + i); // 0 1 2
  }

//continue
// skip a condition and continue the next iteration
for (let i = 0; i < 10; i++) {
    if (i === 3) { 
        continue; 
    }
    console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9 
  }

/* Exercise 2 */
let names= ["john", "sarah", 23, "Rudolf",34]

//using for loop
for(let n = 0; n < names.length; n++){
    let nameItem = names[n]
    const typeval = typeof nameItem

    if(typeval !== 'string'){
        console.log(nameItem)
        continue
    }else{
        console.log(nameItem)
        const firstLetter = nameItem.charAt(0)
        const ucFirstLetter = firstLetter.toUpperCase()
        if(firstLetter !== ucFirstLetter){
            nameItem = nameItem.replace(firstLetter, ucFirstLetter)
            console.log(nameItem)
        }

        console.log(nameItem)

    }
}

//using for/of loop <see screenshot in folder>


//2.1
let personNames= ["john", "sarah", "jack", "Robin", 12, ]

for(let e = 0; e < personNames.length; e++){
        const personItem = personNames[e]
        const typeNameItem = typeof personItem
        console.log(personItem)

        if(typeNameItem  != 'string'){
            break; // cannot continue the loop because the loop is broken
        } 
}

