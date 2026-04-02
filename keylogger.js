// Object to track key counts
const keyCounts = {};

// Track recent key sequence
let typedSequence = "";

// Listen for key presses
document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Update count
    if (keyCounts[key]) {
        keyCounts[key]++;
    } else {
        keyCounts[key] = 1;
    }

    // Update typed sequence (only letters, lowercase)
    if (key.length === 1) {
        typedSequence += key.toLowerCase();
    }

    // Keep only last 5 characters
    if (typedSequence.length > 5) {
        typedSequence = typedSequence.slice(-5);
    }

    // Display counts in console
    console.clear();
    console.log("Key Counts:");
    
    for (let k in keyCounts) {
        console.log(`${k}: ${keyCounts[k]}`);
    }

    // --- Styling Rules / Triggers ---

    // Press "0" 3 times → change background color
    if (keyCounts["0"] === 3) {
        document.body.style.backgroundColor = "lightgreen";
    }

    // Press "h" 7 times → Comic Sans
    if (keyCounts["h"] === 7) {
        document.body.style.fontFamily = "Comic Sans MS, Comic Sans, cursive";
    }

    // Type "hello" → display message
    if (typedSequence === "hello") {
        const message = document.createElement("p");
        message.textContent = "hello 👋";
        message.style.fontSize = "2em";
        document.body.appendChild(message);
        typedSequence = "";
    }

    // Press Escape → reset styles
    if (keyCounts["Escape"] === 1) {
        document.body.style = "";
    }

    // Press "x" 5 times → display an alert
    if (keyCounts["x"] === 5) {
        alert("You pressed 'x' 5 times!");
    }

});