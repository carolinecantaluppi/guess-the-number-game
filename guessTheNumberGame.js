console.log("Welcome to Guess The Number Game!");

while (true) {    
    console.log("Choose the difficulty:");
    console.log("1 - Easy (1 to 50)");
    console.log("2 - Medium (1 to 100)");
    console.log("3 - Difficult (1 to 200)");
    let numbers1 = Math.floor(Math.random() * 50) + 1;
    let numbers2 = Math.floor(Math.random() * 100) + 1;
    let numbers3 = Math.floor(Math.random() * 200) + 1;
    
    let difficulty = parseInt(prompt("Enter the difficulty number: "));
    
    if (difficulty == 1) {
        max_num = 50;
    } else if (difficulty == 2){
        max_num = 100;
    } else if (difficulty == 3){
        max_num = 200;
    } else {
        console.log("Digit invalid, please choose a number between 1 and 3");
    }
    
    secret_number = Math.floor(Math.random() * max_num) + 1;
}