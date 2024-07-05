let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    let buttonValue = e.target.innerHTML;

    switch (buttonValue) {
      case '=':
        try {
          // Safer evaluation (optional):
          // string = new Function('return ' + string)(); // For more complex math

          // Basic math evaluation (with caution):
          string = eval(evalString(string)); // Wrap in a custom function for basic math

          input.value = string;
        } catch (error) {
          console.error("Invalid expression:", error.message);
          input.value = "Error";
          string = ""; // Clear string for next input
        }
        break;

      case 'AC':
        string = "";
        input.value = string;
        break;

      case 'DEL':
        string = string.substring(0, string.length - 1); // Avoid negative index
        input.value = string;
        break;

      default:
        string += buttonValue;
        input.value = string;
    }
  });
});

// Custom function for basic math evaluation (optional)
function evalString(str) {
  // Allow only basic arithmetic operators (+, -, *, /) and parentheses
  const allowedChars = /[\+\-\*\/\(\)]|[0-9.]/;
  return str.replace(/[^0-9\-+\*\/\(\).]/g, ""); // Remove non-allowed characters
}
