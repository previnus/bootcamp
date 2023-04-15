/* Exercise 4 : Welcome
Instructions
John has just signed in to your website and you want to welcome him. */

/* Create a Bootstrap Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture. */

((user) => {
    const div = document.createElement('div');
    div.classList.add('navbar-text');
    div.innerHTML = `img src="image.jpg" alt="Profile Picture" width="30" height="30" class="rounded-circle mr-2">Welcome, ${user}`;
    const nav = document.querySelector('.navbar-nav');
    nav.appendChild(div);
  })('John');