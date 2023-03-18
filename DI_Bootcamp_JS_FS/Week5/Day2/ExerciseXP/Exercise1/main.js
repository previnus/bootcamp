/* Exercise 1

1 Add the code above, to your HTML file

<div id="container">Users:</div>
<ul class="list">
    <li>John</li>
    <li>Pete</li>
</ul>
<ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
</ul>

2 Using Javascript:
    1 Retrieve the div and console.log it 
    */
    console.log(document.querySelector('div'))
    /*
    2 Change the name “Pete” to “Richard”.
    */
    let nameSelector =  document.querySelector("li:nth-child(2)")
    nameSelector.innerHTML = "Richard"
    /*
    3 Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
    */
    const sarah =  document.querySelector("ul:nth-of-type(2) li:nth-of-type(2)")
    console.log(sarah)
    sarah.remove()
    /*
    4 Change each first name of the two <ul>'s to your name. (Hint : use a loop)
    */
    const getFirstLi = document.querySelectorAll('ul li:first-of-type')
    
    for(let i = 0; i < getFirstLi.length; i++)
        getFirstLi[i].innerHTML = "Previn"
    /*

3 Bonus - Using Javascript:
    1 Add a class called student_list to both of the <ul>'s.
    */
    const getUl = document.querySelectorAll('.list')
    console.log(getUl)
    
    for(let x = 0; x < getUl.length; x++){
        getUl[x].classList.add('student_life')
    }

    /*
    2 Add the classes university and attendance to the first <ul>. */
    const firstUl = document.querySelector('ul')
    firstUl.classList.add('university', 'attendance')


