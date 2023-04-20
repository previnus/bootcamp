/* Part 1 : Quote Generator
Create an HTML file, that contains a section (for now the section is empty), and a button “Generate Quote”.

In the Javascript file, create an array of objects. Each object has 3 keys : id, author and quote. The id must start at 0, and is incremented for every new quote. So the first quote will have the id 0, the second quote the id 1, the third quote the id 3 ect…

Populate the array with a few quotes that you like.

When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
Important: When clicking on the button, make sure you don’t display the same quote twice in a row.
 */

const quotes = [
    {
        id : 1,
        author : 'Steve Jobs',
        quote : 'The only way to do great work is to love what you do.'
    },
    {
        id : 2,
        author : 'Winston Churchill',
        quote : 'Success is not final, failure is not fatal: it is the courage to continue that counts.'
    },
    {
        id : 3,
        author : 'Abraham Lincoln',
        quote : 'The best way to predict your future is to create it.'
    }
]

let generateQuoteBtn = document.querySelector('.button')
let quoteContainer = document.querySelector('.innercontent')
let lastQuote

generateQuoteBtn.addEventListener('click', () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  
  // Generate new random quote if it is the same as the last quote displayed
  while (randomQuote === lastQuote) {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  }
  
  lastQuote = randomQuote
  
  const quoteHTML = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="author">- ${randomQuote.author}</p>
  `
  
  quoteContainer.innerHTML = quoteHTML;
})


