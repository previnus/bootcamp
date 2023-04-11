/* Exercise 6 : Bank Details */

/* Instructions
In this exercise, you have to decide which type of variables you have to use (ie. let or const): */

/* 1. Create a global variable called bankAmount which value is the amount of money currently in your account. */

const bankAmount = 1000

/* 2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%). */

const VAT = 17

/* 3. Create an array with all your monthly expenses, both positive and negative (money made and money spent).
Example : const details = ["+200", "-100", "+146", "+167", "-2900"] */
const monthlyExp = ["+200", "-100", "+146", "+167", "-2900"]

/* 4. Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT). */
let valueAddedExp = []

monthlyExp.forEach((expense) => {
    
    let vatAdded = parseInt(expense) + (expense * (VAT/100))
    valueAddedExp.push(vatAdded)
})

console.log(valueAddedExp)
/* 5. Display your current bankAccount standing at the end of the month. */
let totalExp = 0

for(i = 0; i < valueAddedExp.length; i++){
    totalExp = totalExp + valueAddedExp[i]
}

console.log(totalExp)

const newBankBalance = totalExp - bankAmount

console.log(`new bank balance is ${newBankBalance}`) 