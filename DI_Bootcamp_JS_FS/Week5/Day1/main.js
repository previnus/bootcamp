/* Exercise 1 */

//using query selector

console.log(document.querySelector('body'))
console.log(document.querySelector('div'))
console.log(document.querySelector('ul'))
console.log(document.querySelector('li:nth-child(1)'))
console.log(document.querySelector('li:nth-child(2)'))

/* Exercise 2 */

let a = document.querySelector('a#dI')

let href = a.getAttribute('href')
console.log(href)

let hreflang = a.getAttribute('hreflang')
console.log(hreflang)

let rel = a.getAttribute('rel')
console.log(rel)

let target = a.getAttribute('target')
console.log(target)

let type = a.getAttribute('type')
console.log(type)

/* EXERCISE 3 */

let ptag = document.querySelector('#text')

ptag.style.backgroundColor = 'red'
ptag.style.color = 'white'
ptag.style.fontSize = '20px'
ptag.style.fontWeight = '600'
