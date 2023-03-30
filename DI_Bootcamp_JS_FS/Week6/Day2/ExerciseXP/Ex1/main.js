/* Using this HTML code:

<!DOCTYPE html>
    <html>
    <head>
        <style>
        p {
          background: yellow;
          color: red;
        }
        </style>
    </head>
    <body>
        <div id="container"></div>
        <button id="clear">Clear Interval</button>
    </body>
    </html>


Part I
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World”.
*/
const alertMsg = () => {
    alert('Hello World')
}

//setTimeout(alertMsg, "2000");
/*

Part II
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

*/
let count = 0
const addpara = () => {
    let para = document.createElement('p')
    para.innerHTML = "Hello World"
    const divContainer = document.querySelector('#container')
    divContainer.appendChild(para)
}

//setTimeout(addpara, 2000)
/*


Part III
In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
 */

count = 0
const addpara2 = () => {
    let para = document.createElement('p')
    para.innerHTML = "Hello World"
    const divContainer = document.querySelector('#container')
    divContainer.appendChild(para)
    count++

    if(count === 5){
        clearInterval(interval2)
        console.log('cleared')
    }
}

const interval2 = setInterval(addpara2, "2000")

const button = document.querySelector('#clear')
button.addEventListener('click', (e) => {
    clearInterval(interval2)
    console.log('cleared')
})