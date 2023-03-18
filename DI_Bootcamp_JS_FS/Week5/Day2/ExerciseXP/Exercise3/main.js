/* Exercise 3

<div id="navBar">
    <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">My Friends</a></li>
        <li><a href="#">Messenger</a></li>
        <li><a href="#">My Pics</a></li>
    </ul>
</div>

1 Add the code above, to your HTML file

2 Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

*/
const divSel = document.querySelector('div').setAttribute('id', 'socialNetworkNavigation')
/*

3 We are going to add a new <li> to the <ul>.
    1 First, create a new <li> tag (use the createElement method).
    */
    let newLi = document.createElement('li')
    /*
    2 Create a new text node with “Logout” as its specified text.
    */
    const text = document.createTextNode('Logout')
    /*
    3 Append the text node to the newly created list node (<li>).
    */
    newLi.appendChild(text)
    /*
    4 Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
    */
    document.querySelector("ul").appendChild(newLi)
    /*

4 Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property). */
firstEl = document.querySelector('ul').firstElementChild
lastEl = document.querySelector('ul').lastElementChild
console.log(firstEl.textContent)
console.log(lastEl.textContent)