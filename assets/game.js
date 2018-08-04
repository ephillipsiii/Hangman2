//array of words to be randomly chosen
var wordArray = ["ipa", "brown", "stout", "saison", "blonde", "amber", "blackipa"];
//saving a chosen word
var chosenWord = "";
//an array of empty letters in a chosen word
var emptyChosenWord = [];
//solution to be displayed as blanks
var blanks = 0;
//array to hold successfull attempts - to be displayed on the DOM
var choices = [];
//array to hold wrong choices
var wrongChoices = [];

//game counters
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

//begin game function
function beginGame() {
    //reseting the game
    guessesRemaining = 10;
    //choosing a random word from the pool
    chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    //using split method to populate the emptyChosenWord array with individual letters
    emptyChosenWord = chosenWord.split("");
    //figuring out the number of blanks 
    blanks = emptyChosenWord.length;

    console.log(chosenWord);

}
