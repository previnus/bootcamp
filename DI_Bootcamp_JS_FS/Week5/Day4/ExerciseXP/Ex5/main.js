let element = document.querySelector('.element')

console.log(element)

element.addEventListener('click', e => {
    console.log(e.target)
    e.target.style.backgroundColor = 'red'
})

element.addEventListener('dblclick', e => {
    e.target.style.backgroundColor = 'blue'
})

element.addEventListener('mouseover', e => {
    e.target.style.top = '100px'
})

element.addEventListener('mouseout', e => {
    e.target.style.top = ''
})
