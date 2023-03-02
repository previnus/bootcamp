const sentence = 'The food is not much bad, I like it!'

const posNot = sentence.indexOf('not')
console.log(posNot)
const posBad = sentence.indexOf('bad')
console.log(posBad)


if(posNot >= 0 && posNot < posBad){
    const toReplace = sentence.substring(posNot, posBad + 3)
    console.log(toReplace)

    const newSentence = sentence.replace(toReplace, 'good')
    console.log(newSentence)
}else{
    console.log(sentence)
}