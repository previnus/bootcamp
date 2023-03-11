/* Prompt the user for several words (separated by commas).
Put the words into an array.
Console.log the words one per line, in a rectangular frame as seen below.
Check out the Hints and Requirements below.
For example, if the user gives you:
Hello, World, in, a, frame
you will transform it to : ["Hello", "World", "in", "a", "frame"]
that will get displayed as:stars and words */

let promptTxt = prompt('Enter a sentence separated by , after each WORD')
//let promptTxt = 'Helloooooooooo, This , Is , a , new, phrase'

const textToArr = (text) => {
    arr = text.split(",")
    newarray = []
    
    for(let i = 0; i < arr.length; i++){
        newarray.push(arr[i].trim())
    }
    return newarray

}

//use for debugging
//arr = textToArr(promptTxt)
//console.log(arr)

const findLongestWord = (arr) => {

    var longest = 0;

    for(var i = 0; i < arr.length; i++) {
       if(arr[i].length >= longest) {
         longest = arr[i].length
          } 
       }
    return longest
}

//use for debugging
//console.log(findLongestWord(promptTxt))

const stars = (arr) => {
    arr = textToArr(arr)
    let longestWordCount = findLongestWord(arr) // get longest string count in array
    let maxStarsCount = longestWordCount + 4 // get maximum stars at start and end of the string
    let resultString = ""
    let maxStars = ""

    //get the string containing maximum number of stars
    for( let i = 0; i < maxStarsCount ; i++){
        maxStars += "*"
    }

    //iterates through the text array to add the stars to each word
    for (let x = 0;  x < arr.length; x++){
        let strLength = arr[x].length
        let newStr = ""
        let wordCompare = longestWordCount - strLength
        
        if(wordCompare == 0){
            newStr =  arr[x] + " *"
        }else{
            newStr =  arr[x] + ' '.repeat(wordCompare) + " *"
        }

        resultString += "* " + newStr +"\n"
    }

    // returns final value of start stars + each word + ending stars
    return maxStars + "\n" + resultString + maxStars



}

console.log(stars(promptTxt))