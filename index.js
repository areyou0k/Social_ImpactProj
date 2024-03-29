// TODO: Query for button with an id "theme-button"
let themeBtn = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
document.body.classList.toggle('dark-mode');

}


// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeBtn.addEventListener('click', toggleDarkMode);