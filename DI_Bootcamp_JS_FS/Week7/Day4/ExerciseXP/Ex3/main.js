/* Exercise 3 : Fortune Teller
Instructions
Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
 */

((hello) => {
    console.log(hello)
})("test self invoking function");



((numChildren, nameOfPartner, location, jobTitle) => {
    const display = `You will be a ${jobTitle} in ${location}, and married to ${nameOfPartner} with ${numChildren} kids.`
    const element = document.createElement('p')
    element.textContent = display
    document.body.appendChild(element)
})(3, 'julie', 'port-louis', 'web designer')