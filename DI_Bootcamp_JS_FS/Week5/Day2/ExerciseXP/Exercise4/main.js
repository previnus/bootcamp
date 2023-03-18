/* Exercise 4

Take a look at this link for help.

The point of this challenge is to display a list of two books on your browser.

1 In the body of the HTML page, create an empty div:

<div class="listBooks"></div>

2 In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
    - title,
    - author,
    - image : a url,
    - alreadyRead : which is a boolean (true or false).

*/
let allBooks = []
/*

3 Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

*/
allBooks = [
    {
        title : "Sherlock Holmes",
        author : "Sir Arthur Conan Doyle",
        image : "https://api.lorem.space/image/book?hash=B0E33EF4",
        alreadyRead : true
    },{
        title : "The Glass Menagerie",
        author : "Tenessy Williams",
        image : "https://api.lorem.space/image/book?hash=225E6693",
        alreadyRead : false
    }]
/*

4 Requirements : All the instructions below need to be coded in the js file:
    1 Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
        For each book :
            - You have to display the book’s title and the book’s author.
                Example: HarryPotter written by JKRolling.
            - The width of the image has to be set to 100px.
            - If the book is already read. Set the color of the book’s details to red. */

let table = `<table><thead><tr><th>Title/Author</th><th>Image</th></tr></thead><tbody>`

for(key in allBooks){
    console.log(allBooks[key].title)
    let book = allBooks[key] 
    readState = ``
    if(book.alreadyRead != false){
        readState = `color:red;`
    }

    table += `<tr><td style="${readState}"><b>${book.title}</b> <br>by ${book.author}<td>`
    table += `<td><img src="${book.image}" /></td></tr>`
}

table += `</tbody></table>`

document.querySelector(".listBooks").innerHTML = table
document.querySelectorAll('img').forEach((item) => {
    item.style.width = '100px'
})