const validateInput = (text) => {
    const regex = /^[A-Za-z]+$/ 

    if(text.match(regex)){
        return true
    }else{
        return false
    }
  }

const myinput = document.querySelector('#myInput')
const myDiv = document.querySelector('#div')
const regex = /^[A-Za-z]+$/ 

myinput.addEventListener('keyup', (e) => {
    let inputVal = e.target.value
    
    if(!validateInput(inputVal)){
        alert('you must input a text')
        inputVal = inputVal.replace(regex, '')
    } else{
        myDiv.innerHTML = inputVal
    }
})