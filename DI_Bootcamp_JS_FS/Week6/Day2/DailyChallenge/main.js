const validateInput = (text, regex) => {
    if(text.match(regex)){
        return true
    }else{
        return false
    }
  }

const myinput = document.querySelector('#myInput')
const button = document.querySelector('button')
const myDiv = document.querySelector('#div')
const regex = /^[A-Za-z]+$/ 

myinput.addEventListener('keyup', (e) => {
    let inputVal = e.target.value
    
    if(!validateInput(inputVal, regex)){
        alert('you must input a text')
        inputVal = inputVal.replace(regex, '')
    } else{
        myDiv.innerHTML = inputVal
    }
})

button.addEventListener('click', (e) => {
    window.location.reload()
})
