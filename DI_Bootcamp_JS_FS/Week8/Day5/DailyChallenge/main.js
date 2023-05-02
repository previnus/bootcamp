const anagram = (string1, string2) => {
    let comp1 =  string1.replace(/\s/g, '').toLowerCase().split("").sort()
    let comp2 = string2.replace(/\s/g, '').toLowerCase().split("").sort()

    //console.log(comp1, comp2)



    for(let i = 0; i < comp1.length; i++){
        if(comp1.length === comp2.length){
            if(comp1[i] === comp2[i]){
                return  'The two strings are anagram of each other'
            }else{
                break
            }
        }

    }
    
return 'The two strings are NOT anagram of each other'
    
}

console.log(anagram('hello three', 'hello there'))
