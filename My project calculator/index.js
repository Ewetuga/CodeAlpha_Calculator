// Theme switching functionality
const colorButtons = document.querySelectorAll(".colors");

colorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.currentTarget.classList.contains("two")) {
            document.body.style.backgroundColor = "gray";
        } else if (e.currentTarget.classList.contains("three")) {
            document.body.style.backgroundColor = "#6699cc";
        } else {
            document.body.style.backgroundColor = "#3e566f";
        }
    });
});

// Calculator functionality
const boxSection = document.querySelector(".box-section");
let input = ""; // Stores the current input

// Append number or operator to input
function appendInput(value) {
    input += value;
    boxSection.innerText = input;
}

// Delete the last character (DEL button)
function clearInput() {
    input = input.slice(0, -1);
    boxSection.innerText = input || "0"; // Show "0" if input is empty
}

// Reset the entire input field (RESET button)
function resetCalculator() {
    input = "";
    boxSection.innerText = "0";
}

// Calculate the result and display it
function calculateResult() {
    try {
        const result = eval(input); // Use eval carefully
        input = result.toString();
        boxSection.innerText = input;
    } catch (error) {
        boxSection.innerText = "Error";
        input = ""; // Reset input on error
    }
}
