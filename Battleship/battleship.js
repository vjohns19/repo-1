var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false){
    guess = prompt(R="Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid number; only numbers 0 to 6");
    } else {
        guesses = guesses +1;
    
    if (guess == location1 || guess == location2 || guess == location3){
        hits = hits + 1;
        alert("you hit my ship")          
        if (hits == 3){
        isSunk = true;
        alert("You sank my battleship")
    }
  }

}
var stats = "you took" + guesses + "to sink my Battleship," +
"which means your shooting accuracy was" + (3/guesses);
alert(stats);
}
