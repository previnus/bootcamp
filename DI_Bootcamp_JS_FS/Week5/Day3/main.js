const button = document.querySelector('#button')

let count = 0
button.addEventListener('click', () =>{
    count++
    alert('clicked!!' + count)
})

const myClick = () => {
    alert('second button clicked!!')
}

btn = document.querySelector('#jsstyle')

btn.addEventListener('mouseover', (e) => {
    //debugger
    console.log(e)
    e.target.style.backgroundColor = 'red'

})

// using '' will reset the css into its original state (browser state)
btn.addEventListener('mouseout', (e)=>{
    e.target.style.backgroundColor = ''
    e.target.style.padding = ''
})

btn.addEventListener('click', (e) => {
    e.target.style.padding = '20px'
})

const redBox = document.querySelector(".redbox")

redBox.addEventListener('mouseover', (e) => {
    console.log(e)
    e.target.classList.remove('redbox')
    e.target.classList.add('bluebox')
})


/* redBox.addEventListener('mouseout', (e) => {
    e.target.classList.remove('bluebox')
    e.target.classList.add('redbox')
})
 */

//same event but using destructuring on the event object

redBox.addEventListener('click', ({target, type}) => {
    target.classList.remove('bluebox')
    target.classList.add('redbox')
    console.log(target, type)
})


/* Exercise 3 */

let s3 = document.querySelector("#section3")
let btn1 = document.querySelector("#jsstyle1")

s3.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'
    console.log(e)

})

btn1.addEventListener('click', (e) =>{
    console.log(e)
    e.target.style.backgroundColor ='blue'
    e.stopPropagation()
})
