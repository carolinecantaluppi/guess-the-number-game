let best_tries = null;  
let max_num;  
let secret_number;  
let tries = 0;  

// Function to start the game based on selected difficulty
function startGame() {   
    let difficultyElement = document.getElementById("difficulty");
    let startButton = document.querySelector("button[onclick='startGame()']");
    let gameContainer = document.getElementById("game");
    let difficultyContainer = document.getElementById("difficulty").parentElement;

    let difficulty = parseInt(difficultyElement.value); 

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
    gameContainer.style.display = "block";
    document.getElementById("result").innerText = "";
    document.getElementById("guess").value = "";
    document.getElementById("win-card").classList.add("d-none");
    
    // Hide difficulty selection and start button
    startButton.style.display = "none";
    difficultyContainer.style.display = "none";
    
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
        // Correct guess, show success message and hide game
        resultText = `Congratulations! You guessed it in ${tries} tries.`;
        document.getElementById("game").style.display = "none";
        document.getElementById("win-card").classList.remove("d-none");
        document.getElementById("background").style.display = "none";
        document.getElementById("tries").innerText = tries;
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
