/* Exercise 2

<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit" id="submit">
</form> 
<ul class="usersAnswer"></ul>


Retrieve the form and console.log it.

*/

let form = document.querySelector('form')
console.log(form)

/*

Retrieve the inputs by their id and console.log them.

*/
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')

console.log(fname, lname)

/*

Retrieve the inputs by their name attribute and console.log them.

*/
let fnname = document.getElementsByName('fname')
let lnname = document.getElementsByName('lname')

console.log(fnname)
console.log(lnname)

/*

When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :

<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul> */

form.addEventListener('submit', (e) => {
    e.preventDefault() //prevent the form to submit
    let input = document.querySelectorAll('input[type=text]')
    console.log(input)
    let ul = document.querySelector('.usersAnswer')

    for(let i = 0; i < input.length; i++){
        if(input[i].value == ''){
            alert(getinputs[i].getAttribute('id') + ' is empty')
            
        }else{
            let newEl = document.createElement('li')
            newEl.textContent = input[i].value
            ul.appendChild(newEl)
        }
    }
})