/* Exercise 4 : Colors */


/* Instructions
Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods. */

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for(i = 0; i < colors.length; i++){
  let text = `${i + 1}# choice is ${colors[i]}\n`
  console.log(text)
  if(colors[i] ===  'Violet'){
    console.log("Yeah")
  }else{
    console.log('No')
  }
}