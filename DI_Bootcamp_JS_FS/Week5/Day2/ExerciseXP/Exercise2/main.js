/* Exercise 2

<div>Users:</div>
<ul>
    <li>John</li>
    <li>Pete</li>
</ul>


1 Add the code above, to your HTML file

2 Using Javascript:
    1 Add a “light blue” background color and some padding to the <div>.
    */
    const firstDiv = document.querySelector('div')
    firstDiv.style.backgroundColor = 'lightblue'
    firstDiv.style.padding = '25px'
    /*
    2 Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
    */
    // commented for bonus exercise
    const removeLi = document.querySelector('li:nth-child(1)').remove()
    /*
    3 Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
    */
    const addborder = document.querySelector('li:nth-child(1)').style.border = '1px solid black'
    /*
    4 Change the font size of the whole body.
    */
    const changeBodyFont = document.querySelector('body').style.fontSize = '24px'
    /*

3 Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div). */
    const getAttr = firstDiv.getAttribute('style')
    console.log(getAttr)
    const indexStr = getAttr.indexOf('lightblue')
    console.log(indexStr)

    if( indexStr != -1){
        const x = document.querySelector('li:nth-child(1)').textContent
        console.log(x)
        const y = document.querySelector('li:nth-child(2)').textContent
        alert(`Hello ${x} and ${y}`)
    }