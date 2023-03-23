/* Exercise 1

<article>
    <h1> Some Facts </h1>
    <h2> The Chocolate </h2>
    <h3> History of the chocolate </h3>
    <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p> After the European discovery of the Americas, chocolate became 
    very popular in the wider world, and its demand exploded. </p>
    <p> Chocolate has since become a popular food product that millions enjoy every day, 
    thanks to its unique, rich, and sweet taste.</p> 
    <p> But what effect does eating chocolate have on our health?</p> 
</article>


Using a DOM property, retrieve the h1 and console.log it.
*/
    console.log(document.querySelector('article').firstElementChild.innerHTML)

/*
Using DOM methods, remove the last paragraph in the <article> tag.
*/
document.querySelector('article').lastElementChild.remove()

/*

Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
*/
document.querySelector('h2').addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'
})

/*



Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
*/
document.querySelector('h3').addEventListener('click', (e) => {
    e.target.style.display = 'none'
})

/*

Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
*/
document.querySelector('button').addEventListener('click', (e) => {
    let p  = document.querySelectorAll('p')
    p.forEach((e) => {
        e.style.fontWeight = '900'
    })
})

/*

BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

*/
document.querySelector('h1').addEventListener('mouseover', (e) => {
    let random = Math.floor(Math.random() * 100) + 1;
    e.target.style.fontSize = random + 'px'
})
/*

BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google) */

seP = document.querySelector('p:nth-of-type(2)')
console.log(seP)

seP.addEventListener('mouseover', (e) =>{
    e.target.style.opacity = '0'
})