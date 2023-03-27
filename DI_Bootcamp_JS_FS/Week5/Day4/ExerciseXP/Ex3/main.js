/* Exercise 3

Add this sentence to your HTML file then follow the steps :

<p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
<strong>end</strong> you <strong>will</strong> be great Developers!
<strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


In the JS file:

Declare a global variable named allBoldItems.

*/
var allBoldItems = ""

/*

Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

*/
const getBold_items = () => {
    let strong = document.querySelectorAll('strong')
    for(i = 0; i < strong.length; i++){
        allBoldItems += strong[i].innerHTML + " "
    }

    return allBoldItems
}

console.log(getBold_items())
/*

Create a function called highlight() that changes the color of all the bold text to blue.

*/
const highlight = () => {
    let strong = document.querySelectorAll('strong')

    for(i = 0; i < strong.length; i++){
        strong[i].style.color = 'blue'
    }
}
/*

Create a function called return_normal() that changes the color of all the bold text back to black.

*/
const return_normal = () => {
    let strong = document.querySelectorAll('strong')

    for(i = 0; i < strong.length; i++){
        strong[i].style.color = ''
    }
}

/*

Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example */

let paragraph = document.querySelector('p')

paragraph.addEventListener('mouseover', (e) => {
    highlight()
})

paragraph.addEventListener('mouseout', (e) => {
    return_normal()
})