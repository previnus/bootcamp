/* Exercise 4

<p>Input radius value and get the volume of a sphere.</p> 
<form  id="MyForm"> 
    <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
    <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
    <input type="submit" value="Calculate" id="submit">    
</form> 

<script src="main.js"></script>

Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base: */

let myform = document.querySelector('#MyForm')

const volumeCalc = (radius) => {
    let pi = Math.PI
    let volume = (4/3) * pi * (radius ** 3)

    return volume
}

myform.addEventListener('submit', (e) => {
    e.preventDefault()
    let inRadius = document.querySelector('#radius')
    let inVol = document.querySelector('#volume')

    if(inRadius.value != ''){
        console.log(inRadius)
        let finalCalc = volumeCalc(parseInt(inRadius.value))
        inVol.value = finalCalc
        console.log(finalCalc)
    }
})