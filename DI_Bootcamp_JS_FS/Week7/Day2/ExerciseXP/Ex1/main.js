/* 🌟 Exercise 1 : Scope
Instructions
Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions. */

// #1
/* function funcOne() {
  const a = 5;
  if(a > 1) {
      a = 3;
  }
  alert(`inside the funcOne function ${a}`);
} */

/* The let variable accept changes but is a local scope variable
Answer -- It will alert the following message "inside the funcOne function 3" */

// #1.1 - run in the console:
//funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
/* 
Answer -- it will return an error assignement to constant variable and as const can only be declared once 
 */

//#2
/* let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree() */

/* First it will alert "inside the funcThree function 0" and then will alert again "inside the funcThree function 5"
Answer -- this is due to the fact that on the first run of funcThree, the value of a was 0 and then funcTwo assigned a value of 5 and then on the second run of funcThree, the new value of 5 is alert */

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
/* 
Answer -- if a const is defined instead of let, the funcThree function will run once to alert 0 and then when funcTwo is run, it will stop with an error assignement to constant variable and as const can only be declared once  */


/* function funcFour() {
  window.a = "hello";
}


function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

Answer -- Alert message will appear saying "inside the funcFive function hello". The funcFour add a new function to the global scope and therefore funcFive can use the same scope variable.
 */

/* //#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
 */
/* Answer -- An alert will appear with the following message "inside the funcSix function hello", The value of a is overriden by hello although it was originally set at 0 */
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
/* Answer -- constant can only be declared once and thus it will return an error assignement to constant variable */

//#5
/* let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`); */

// #5.1 - run the code in the console

/* Answer -- The first alert has taken the value of variable as 2 as it was declared inside the if statement, however the second outside variable only take the first variable = 2 because it is the original return */
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
/* Answer -- it will return the same value as the let statement, first the inside block would be 5 and outside block would be 2 as the scope changes during the if statement. */
