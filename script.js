let randomNumber = Math.floor(Math.random() * (25)) + 1;

const maxAttempts = 5;
// console.log(randomNumber);



const startGuessing = function(){
    let person = prompt("Welcome! What is your name?");
    if (person != null) {
        alert("Hello " + person + "! How are you today?");
    }
    
    for (i = 0; i < 6; i++){
        if (i === 1){
            alert("You've got 4 attempts left...")
        } else if (i === 2){
            alert("You've got 3 attempts left...")
        } else if (i === 3){
            alert("You've got 2 attempts left...")
        } else if (i === 4){
            alert("One more guess left...")
        } else if (i > 4){
            alert("Game Over!")
            break;
        }

    let guess = prompt("Please choose a number between 0-25");
        if (guess < randomNumber) {
            alert("I'm sorry, your guess is too low. Try again...")
            // console.log("Your guess is: ", guess);
        } else if (guess > randomNumber) {
            alert("I'm sorry, your guess is too high. Try again...")
        } else if (guess == randomNumber){
            alert("Congratulations! You have won the game!")
            alert("Thanks for playing Guess the Number! See you soon!")
        } else {
            alert("Oops, it seems you haven't typed in a number. Please type in a number.")
        }
    }
};
