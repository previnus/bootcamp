/* Exercise 5 : Juice Bar
Instructions
You will use nested functions, to open a new juice bar. */

/* Part I:
1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large. */

/* 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". */

/* 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope. */

/* const makeJuice = size => {
    const addIngredients = (ing1, ing2, ing3) => {
        display = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`
        const element = document.createElement('p')
        element.textContent = display
        document.body.appendChild(element)
    }

    addIngredients('pineapple', 'mango', 'apple')
}

makeJuice('large')
*/

/* Part II:
1. In the makeJuice function, create an empty array named ingredients. */

/* 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array. */

/* 3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method. */

/* 4 .The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope. */

const makeJuice = size => {
    const ingredients = []

    const addIngredients = (ingredient1, ingredient2, ingredient3) => {
        ingredients.push(ingredient1, ingredient2, ingredient3);
      }
    
      const displayJuice = () => {
        const ingJoin = ingredients.join(', ')
        display = `The client wants a ${size} juice, containing ${ingJoin}`
        const element = document.createElement('p')
        element.textContent = display
        document.body.appendChild(element)
      }
    
      addIngredients('pineapple', 'mango', 'apple')
      addIngredients('grapes', 'kiwi', 'orange');
      displayJuice();
}

makeJuice('large')