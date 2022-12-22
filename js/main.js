// Start Button
const startButton = document.getElementById("startButton");
// Listing for start button to be clicked to run startGame()
startButton.addEventListener("click", startGame);

//Main Section
const mainSection = document.getElementById("mainSection");
//Hide the Main Section till start button clicked
mainSection.style.display = "none";

// Ace Card Container
const aceCardContainer = document.getElementById("aceContainer");

// The element message
let message = document.getElementById("message");

// The Stay and Hit Button Container
const stayHitButtonContainer = document.getElementById("buttonContainer");

// Stay and Hit button
const stayButton = document.getElementById("stayButton");
const hitButton = document.getElementById("hitButton");

// user Card Element
let userCardView = document.getElementById("playerCard");
// User Cards global variable
let playersCardsText ;
//users First Card, Second Card & UserSum
let userFirstCard;
let userSecondCard;
let userSum;

// Dealers Card Element
let dealerCardView = document.getElementById("dealerCard");
//Dealer Cards Text Global
let dealerCardsText;
// Dealers First Card, Second Card & Sum
let dealerFirstCard;
let dealerSecondCard;
let dealerSum;

//the start of the game to
// display main section and Hide the start button
function startGame(){
    //Start Button Hidden, Main Section Appears
    startButton.style.display = "none";
    mainSection.style.display = "block";
    // Ace Card Container Hidden
    aceCardContainer.style.display = "none";
    // Message empty at the start of the game
    message.textContent = "";
    //Users Cards
    userFirstCard = randomNumberGenerator();
    userSecondCard = randomNumberGenerator();
    //Dealers Cards
    dealerFirstCard = randomNumberGenerator();
    dealerSecondCard = randomNumberGenerator();
    // Display users cards
    playersCardsText = userFirstCard + " " + userSecondCard;
    userCardView.textContent = playersCardsText;
    // Display Dealers Cards
    dealerCardsText = dealerFirstCard + " " + dealerSecondCard;
    dealerCardView.textContent = dealerCardsText;
    // Sum of the 2 users cards
    userSum = userFirstCard + userSecondCard
    // Dealer sum total
    dealerSum = dealerFirstCard + dealerSecondCard;
    // Render Game to continue playing
    renderGame();
}

// Render The Game
function renderGame(){
    if (userSum === 21){
        // Display message
        message.textContent = "BlackJack!";
        //Hide Hit and Stay Button Container
        stayHitButtonContainer.style.display = "none";
        whoWon();
    } else if (userSum < 21){
        //Display Message
        message.textContent = "Would you like another card?";
        //Hide Hit and Stay Button Container
        stayHitButtonContainer.style.display = "flex";
        // Hit button clicked and then function newCard
        hitButton.addEventListener("click", newCard);
        // Stay Button clicked nad then function whoWon();
        stayButton.addEventListener("click", whoWon);
    }else{
        // Display Message
        message.textContent = "Busted! You Lose!"
        //Hide hit and stay Container
        stayHitButtonContainer.style.display = "none";
        //Show start Game Button
        startButton.style.display = "block";
    }
}

// New Card for user Function
function newCard(){
    let usersNewCard = randomNumberGenerator();
    playersCardsText += " " + usersNewCard;
    userCardView.textContent = playersCardsText;
    userSum += usersNewCard;
    renderGame();
}

// New Card for Dealer Function
function dealersNewCard(){
    let usersNewCard = randomNumberGenerator();
    dealerCardsText += " " + usersNewCard;
    dealerCardView.textContent = dealerCardsText;
    dealerSum += usersNewCard;
    whoWon();
}

// This is our random Number generator
function randomNumberGenerator() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

/// This is the function that will check who won the game
function whoWon(){
    //Hide Hit and Stay Button Container
    stayHitButtonContainer.style.display = "none";
    if (dealerSum > 21){
        message.textContent = "Dealer Busted!";
    } else if (dealerSum < 16){
        dealersNewCard();
    }else if (dealerSum > userSum){
        message.textContent = "Dealer Wins!";
    }else if (dealerSum < userSum){
        message.textContent = "You Win!";
    }else if (dealerSum === userSum){
        message.textContent = "Its a Draw!";
    }

    //Show start Game Button
    startButton.style.display = "block";
}