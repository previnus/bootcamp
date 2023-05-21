/* Part 2 : Quote Generator

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
let quoteContainer = document.querySelector('.section')
let lastQuote

generateQuoteBtn.addEventListener('click', () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  
  // Generate new random quote if it is the same as the last quote displayed
  while (randomQuote === lastQuote) {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  }
  
  lastQuote = randomQuote
  
  const quoteHTML = `
    <p>"${randomQuote.quote}"</p>
    <p>- ${randomQuote.author}</p>
  `
  
  quoteContainer.innerHTML = quoteHTML;
})


