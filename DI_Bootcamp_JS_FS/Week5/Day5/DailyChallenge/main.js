const form = document.querySelector('#myform')
const taskLists = document.querySelector('.listTasks')
const resetHtml = taskLists.innerHTML
const textInput = document.querySelector('input.txtinput')
const submit = document.querySelector('button.submit')
const clear = document.querySelector('.clear')

const returnInput = ""
const tasks = []


form.addEventListener('submit', (e) => {

    e.preventDefault() //kill default form submit
    
    //check if input is not empty else do something
    if(textInput.value == ''){
        alert('Empty input, please insert a text')
    }else{
        taskLists.innerHTML = resetHtml //reset the form back to default state
        tasks.push(textInput.value) // push string into array
        addTask(tasks) // add html element
        checkBox()
        deleteTask()


    }

    form.reset() //reset the form
})

//clear and reload the page
clear.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.reload()
})


const addTask = (task) => {

        reset = document.querySelector('.listTasks').innerHTML

        for(let i = 0; i < tasks.length; i++){
            
            let html = `<i class="fa fa-window-close delete" aria-hidden="true"></i>`
            html += `<input type="checkbox" class="checkbox">`
            html += `<span class="text">${tasks[i]}</span>`
        
            const el = document.createElement('div')
            el.classList.add('tasklist')
            el.innerHTML = html
            document.querySelector(".listTasks").appendChild(el)
        }

}

const checkBox = () => {
    let checkbox = document.querySelectorAll('input.checkbox')

    checkbox.forEach((e) => {
        e.addEventListener('change', event => {
        
        //console.log(e.nextElementSibling)
            if(e.checked){
                e.nextElementSibling.style.textDecoration = 'line-through'
            }else(
                e.nextElementSibling.style.textDecoration = ''
            )
        })
    })
}

const deleteTask = (tasks) => {
    let delelement= document.querySelectorAll('.delete')

    delelement.forEach(e => {
        e.addEventListener('click', event => {
            event.target.parentNode.remove()
        })
    })
}