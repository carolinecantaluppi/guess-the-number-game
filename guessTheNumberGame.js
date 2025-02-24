let best_tries = null;  
let max_num;  
let secret_number;  
let tries = 0;  

// Function to start the game based on selected difficulty
function startGame() {   
    let difficulty = parseInt(document.getElementById("difficulty").value); 

    if (difficulty === 1) {
        max_num = 50;
    } else if (difficulty === 2) {
        max_num = 100;
    } else if (difficulty === 3) {
        max_num = 200;
    } else {
        console.log("Invalid choice, please choose a number between 1 and 3.");
        return; 
    }
    
    // Generate a new secret number within the range
    secret_number = Math.floor(Math.random() * max_num) + 1;  
    tries = 0;
    
    // Update UI elements to reflect the new game state
    document.getElementById("range").innerText = `1 and ${max_num}`;
    document.getElementById("game").style.display = "block";
    document.getElementById("result").innerText = "";
    document.getElementById("guess").value = "";
    
    console.log(`Secret number (for testing): ${secret_number}`);
}

// Function to check the user's guess
function checkGuess() {
    let guess = parseInt(document.getElementById("guess").value);

    if (isNaN(guess) || guess < 1 || guess > max_num) {
        document.getElementById("result").innerText = `Please enter a valid number between 1 and ${max_num}.`;
        return;
    }
    
    tries++;
    let resultText = "";
    
    if (guess < secret_number) {
        resultText = `${guess} - The secret number is bigger!`;
    } else if (guess > secret_number) {
        resultText = `${guess} - The secret number is smaller!`;
    } else {
        resultText = `Congratulations! You guessed it in ${tries} tries.`;
        document.getElementById("game").style.display = "none";
        
        if (best_tries === null || tries < best_tries) {
            best_tries = tries;
            resultText = "New record! " + resultText;
        }
    }

    // End the game if the player reaches 10 attempts without guessing correctly
    if (tries >= 10 && guess !== secret_number) {
        resultText = `Game over! The secret number was ${secret_number}.`;
        document.getElementById("game").style.display = "none";
    }

    document.getElementById("result").innerText = resultText;
}