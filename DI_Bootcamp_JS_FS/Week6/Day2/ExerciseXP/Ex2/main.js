/* Copy the code above, to a structured HTML file.
In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, 
when the button is clicked on.
The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
Hint : use clearInterval as soon as the box reaches the right end side of the container
Hint : check out the demonstration in the Course Noted named JS Functions */
const myMove = () => {
    count = 0
    const interval = setInterval((e) => {
        const animate = document.querySelector('#animate')
        const divContainer = document.querySelector('#container')
        let divContainerWidth = window.getComputedStyle(divContainer).getPropertyValue("width");
        let animateWidth = window.getComputedStyle(animate).getPropertyValue("width");
        divContainerWidth = parseInt(divContainerWidth, 10)
        animateWidth = parseInt(animateWidth, 10)
        count++
        animate.style.left = `${count + 1}px`
        console.log(count)
        console.log(divContainerWidth, animateWidth)
        if(count === (divContainerWidth - animateWidth)){
            clearInterval(interval)
            console.log('cleared')
        }
    }, 1)
}


