/* Using this object : */

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

/* Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference */

/* 1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method. */

const displayGroceries = (groceries) => {
    console.log(groceries.vegetables)
    let fruits = groceries.fruits

    fruits.forEach(item => { 
        console.log(item)
    });
}

displayGroceries(groceries)

/* 2. Create another arrow function named cloneGroceries. */

   /*  In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable) */


    /* Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ? */

    /* user is a copy of client and therefore when we change the value of client, the value of user remain the same */

    /* In the function, create a variable named shopping that is equal to the groceries variable. */

    /* Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ? */

    /* Shopping object is an object and thus the value of shopping is a reference of groceries. When the value of a key changes in shopping, the same key of the the other object will change */

    /* Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ? */

    /* The payed key will be the same because passed by reference affects inner arrays and object as well . An object within an object is also a reference of the other object */

    const cloneGroceries = () => {
        let user = client
        console.log(client)
        client = 'betty'
        console.log(user)
    
        let shopping = groceries
        shopping.totalPrice = "35$"
    
        console.log(shopping.totalPrice)
        console.log(groceries.totalPrice)

        groceries.other.payed = false

        console.log(shopping.other.payed)
    
       }
    



/* 3. Invoke the cloneGroceries function. */

cloneGroceries()