
let randomNumber = getRandomNumber();

// let tryAgain = document.getElementById("tryAgain");

let attempts = 5;


function getGuess() {
    
    attempts --;
    let inputGuess = document.getElementById("inputGuess");
    let feedBack = document.getElementById("feedback");
    let guessValue = parseInt(inputGuess.value) ;

    while (attempts > 0) {
        if (guessValue === randomNumber) {

            attempts = 0;

            feedBack.innerHTML = `Bravo !!! randomNumber : ${randomNumber}`;

            break;
        }else if (guessValue > randomNumber) {
            feedBack.innerHTML = `Low Number!! Try Again!!! you left ${attempts} attempts`;
            feedBack.style.color = "red";
            break;
        }else {
            feedBack.innerHTML = `High Number!! Try Again, you left : ${attempts} attempts`;
            feedBack.style.color = "red";
            break;
        }
    }

    if (attempts === 0 && guessValue !== randomNumber) {
        feedBack.innerHTML = `Game Over buddy!!! Correct Answer : ${randomNumber}`;
        tryAgain.style.display = "block";
    }
}



/* function Again() {
    attempts = 5;
    feedBack.innerHTML = "";
    inputGuess.value = 0;
    randomNumber = getRandomNumber();
}
 */

function getRandomNumber() {
   return Math.floor(Math.random()*5)+1;
}