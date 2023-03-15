/* let count, loop


count = 10

for (let index = 0; index <= count; index++) {
   console.log(index)
}

let num = 1
str = 'jeanluc'

while(num <= str.length){
    console.log(num)
    num++
}

console.log(num)

let x = 2
x = 3
x = x + 7

console.log(x)
 */


let count
count = 10

for (let index = 0; index <= count; index++) {
   console.log(index)
}


const myCount = (param) => {

    for (let index = 0; index <= param; index++) {
    console.log(index)
    }
}


myCount(20)


function myName(param){
    return param
}

const myName2 = (x) => {
    let greetings = `Hello ${x}!!!`
    return greetings
}

myName('Jean Luc')
let jl = myName('Jean Luc')

console.log(jl)
console.log(myName2("previn"))

let jluc = myName2("Jean Luc")
let papp = myName2("Previn")
let ysid = myName2("Yvan")
console.log(jluc)
console.log(papp)
console.log(ysid)


//Concatenation
let txt
let txt2

txt1 = "Hello"
txt2 = "Jean luc"
txt3 = '!!!'

txt = "hello" + " "
txt += "jean luc "
txt += '!!!'


console.log(txt1 + txt2 + txt3)
console.log(txt1 + " " + txt2 + " " + txt3)

console.log(txt)

//Daily Challenge


