console.log("Welcome to Guess The Number Game!");

let best_tries = 0;
let max_num;

while (true) {    
    console.log("Choose the difficulty:");
    console.log("1 - Easy (1 to 50)");
    console.log("2 - Medium (1 to 100)");
    console.log("3 - Difficult (1 to 200)");
    
    let difficulty = parseInt(prompt("Enter the difficulty number: "));
    
    if (difficulty === 1) {
        max_num = 50;
    } else if (difficulty === 2){
        max_num = 100;
    } else if (difficulty === 3){
        max_num = 200;
    } else {
        console.log("Digit invalid, please choose a number between 1 and 3");
    }
    
    let secret_number = Math.floor(Math.random() * max_num) + 1;
    let tries = 0;

    console.log(`Try to guess the number between 1 and ${max_num}`);
    
    while (true) {
        let guess = parseInt(prompt("Enter your guess: "));
        tries += 1;

        if (guess < secret_number) {
            console.log("The secret number is bigger!");
        } else if (guess > secret_number) {
            console.log("The secret number is smaller!");
        } else {
            console.log(`🎉 Congratulations! You got it right in ${tries} tries.`);

            if (best_tries === null || tries < best_tries) {
                best_tries = tries;
                console.log("Novo recorde!");
            }
            break;
        }

        if (tries >= 10) {
            console.log(`Game over! The secret number was ${secret_number}`);
            break;
        }
    }
}