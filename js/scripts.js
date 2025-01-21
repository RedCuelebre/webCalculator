/* JavaScript for the Simple Web Calculator */

/* Global Variables */
let val1 = 0; // first value of the opeartion
let operation = ''; // operation to be performed
let val2 = 0; // second value of the operation
let



/*Functions*/
/* Function to change the theme between light and dark */
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    // Toggle between light and dark themes
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        themeToggle.innerHTML = '&#9790;'; // Change icon to moon for dark mode
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        themeToggle.innerHTML = '&#9728;'; // Change icon to sun for light mode
    }
}

/* Function to clear the display */
function clearDisplay() {
    document.getElementById('txtResult').value = '';
}


/* Function to add a number to the current value */ 
/* TO-DO */
function appendNumber(number) {
    value = parseInt(number);
    currentValue = typeof(value);
    document.getElementById('txtResult').value = currentValue;  
}

/* Function to add a decimal point to the current value */
function appendDecimal() {
    /* TO-DO */
}

/* Function to add an operator */
function appendOperator(operator) {
    /* TO-DO */
}

/* Function to change the sign of the current value */
function changeSign() {
    /* TO-DO */
}
