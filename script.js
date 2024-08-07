const checkButton = document.getElementById("check-btn"); 
const textInput = document.getElementById("text-input"); 
const divOutput = document.getElementById("result");

const checkingForPalindrome = input => {
    const originalInput = input; 

    if (input === ""){
        alert('Please input a value');
        return;
    }

    divOutput.replaceChildren();

    const cleanString = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();

    let outputString = `<strong>${textInput}</strong> ${cleanString.split("").reverse().join("") === cleanString ? "is a palindrome" : "is not a palindrome"}`

    const pElement = document.createElement("p")
    pElement.className = "user-input"
    pElement.innerHTML = outputString; 
    divOutput.appendChild(pElement);

    divOutput.classList.remove("hidden");
    
} 


checkButton.addEventListener('click', () => {
  checkingForPalindrome(textInput.value);
  textInput.value = '';
});