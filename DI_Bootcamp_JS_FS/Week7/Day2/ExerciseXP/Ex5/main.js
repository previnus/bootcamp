/* Exercise 5 : Colors #2 */

/* Instructions
Using these arrays :


Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator. */

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((color, index) => {
    const ordinalIndex = (index + 1) % 100;
    const suffix = ordinal[(ordinalIndex - 20) % 10] || ordinal[ordinalIndex] || ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
  });