/* Exercise 1 */

const people = ["Greg", "Mary", "Devon", "James"];

people.shift('greg')
console.log(people)

let arrIndex = people.indexOf("James")
people[arrIndex] = "Jason"

console.log(people)

people.push("Previn")
console.log(people)

let indexMary = people.indexOf("Mary")
console.log(indexMary)

console.log(people.slice(1,3))

let foo = people.indexOf('foo')
console.log(foo)
//Array return -1 because its index is non existent in the array and since the first index return a 0, a negative index means its not in the array

console.log(people.length)

last = people[people.length - 1]
console.log(last)

console.log(people)
/* Part II */

for(let i = 0; i < people.length; i++){
    console.log(people[i])
}

for(let j = 0; j < people.length; j++){
    console.log(people[j])
    if(people[j] === "Jason"){
        break;
    }
}

/* Exercise 2 */
let colors = ["red", "blue", "yellow", "green", "purple","white"]
newColorsArray = []

for( let c = 0; c < colors.length; c++){
    let colorIndex = c + 1
    newTxt = `My #${colorIndex} choice is ${colors[c]}`
    newColorsArray.push(newTxt)
    console.log(newTxt)
}

console.log(newColorsArray)

for( let nc = 0; nc < newColorsArray.length; nc++){
    let arrSplit = newColorsArray[nc].split(" ")
    let numPos = parseInt(arrSplit[1].substring(1))
    let colorName = arrSplit[arrSplit.length - 1]
    console.log(colorName)
    console.log(numPos)
    
    if(numPos === 1){
        console.log(`My ${numPos}st choice is ${colorName}`)
    }else if(numPos === 2){
        console.log(`My ${numPos}nd choice is ${colorName}`)
    }else if(numPos === 3){
        console.log(`My ${numPos}rd choice is ${colorName}`)
    }else{
        console.log(`My ${numPos}th choice is ${colorName}`)
    }
}

/* Exercise 3 */

let input = prompt("insert a number")
console.log(typeof input)

input = parseInt(input)

while(input < 10 || isNaN(input)){
    input = prompt("Please input a number greater than 10!")
}

/* Exercise 4 */
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)

/*
Console.log the name of the second tenant and the number of rooms he has in his apartment.
*/
secondTenantName = building.nameOfTenants[1]
noOfRooms = building.numberOfRoomsAndRent.dan[0]
console.log(`name of the second tenant is ${secondTenantName} and the number of rooms he has in his apartment is ${noOfRooms}.`)

/*
Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
*/
sarahRent = building.numberOfRoomsAndRent.sarah[1]
davidRent = building.numberOfRoomsAndRent.david[1]
danRent = building.numberOfRoomsAndRent.dan[1]

totalRent = sarahRent + davidRent

if(totalRent > danRent){
    danRent = 1200
}

console.log(danRent)


/* Exercise 5 */

const family = {
    mother: 'Tamy',
    father: 'John',
    son: 'Timmy',
    daughter: 'Tani',
    baby: 'Tiny'
}

for (let f in family){
    console.log(f) // key
    console.log(family[f]) //values
}

/* Exercise 6 */
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  newName = ""

  for(let name in details){
    loop = name + ' ' + details[name]
    newName = newName + loop + ' '
  }

  console.log(newName)

/* Exercise 7 */
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()

nameOfSociety = ""

for(let i = 0; i < names.length; i++){
    console.log(names[i])
    let firstLetter = names[i].substring(0, 1)
    console.log(firstLetter)
    nameOfSociety = nameOfSociety + firstLetter
}

console.log(nameOfSociety)