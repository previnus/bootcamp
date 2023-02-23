let addressNumber, addressStreet, country, globalAddress, concatAddress

addressNumber = 5
addressStreet = 'blabla street'
country = 'mauritius'

concatAddress = addressNumber + ' ' + addressStreet + ' ' + country;

globalAddress = 'I live at ' + addressNumber + ' ' + addressStreet + ' in ' + country

console.log(globalAddress)




let currentBirthYear, futureYear, calcYear, text, newText
currentBirthYear = 1986
futureYear = 2030

calcYear = futureYear - currentBirthYear
text = 'I will be ' + calcYear + ' years old in ' + futureYear
newText = `I will be ${calcYear} in ${futureYear}`
console.log(newText)



let users = ['bill', 'jane', 'sarah']
let colors = ['orange', 'yellow', 'blue']
let array = [users, colors]

console.log(array[1][1])


let animals = ['cat','dog','fish','rabbit','cow']
console.log(animals[1])
animals.push('horse')

console.log(animals)

animals.splice(3, 1)
console.log(animals.length)

let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed