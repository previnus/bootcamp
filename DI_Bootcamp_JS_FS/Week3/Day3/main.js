/* let age = prompt('what is your age?')

console.log(typeof(age))
age = parseInt(age)

console.log(typeof(age))

if(age == 18){
    alert('Congratulations on your first year of driving. Enjoy the ride!')
}
else if(age >= 18){
    alert('Powering On. Enjoy the ride!')
}
else{
    alert('Sorry, you are too young to drive this car. Powering off')
}  */

/*  Objects  */
/* let person = {
    firstName : 'John',
    lastName : 'doe'
};

console.log(person.firstName)
console.log(person['firstName'])


person.firstName = 'Jane'
person.eyeColor= 'blue'

console.log(person)


delete person.firstName

console.log(person) */

let user = {
    username : 'john',
    password: 'mysuperpassword'
}

let database = [user]

console.log(database)

let u1, u2, u3

u1 = {
    username : 'user 1',
    timeline : 'lorem ipsum dolore'
}

u2 = {
    username : 'user 2',
    timeline : 'lorem ipsum dolore'
}

u3 = {
    username : 'user 3',
    timeline : 'lorem ipsum dolore'
}

let newsfeed = [u1, u2, u3]
console.log(newsfeed)

//correction

newsfeed =[
    {
        username : 'user 1',
        timeline : 'lorem ipsum dolore'
    },
    {
        username : 'user 2',
        timeline : 'lorem ipsum dolore'
    },
    {
        username : 'user 3',
        timeline : 'lorem ipsum dolore'
    }]

// activate debugger on chrome console
// debugger 

console.log(newsfeed)


/* Regular Expression */

let str = "Happy BirthDay";
let patt = /birthday/i;
let result = str.match(patt);
console.log(result); //returns true

if (result){
    console.log('Yes')
} else{
    console.log('No');
}