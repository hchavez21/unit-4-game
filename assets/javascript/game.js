
var randomNumber= document.getElementById("randomnumber");
  var red= document.getElementById("red");
  var green= document.getElementById("green");
  var blue= document.getElementById("blue");
  var yellow= document.getElementById("yellow");
  var wins= document.getElementById("wins");
  var losses= document.getElementById("losses");

  var wins= 0;
  var losses= 0;
  var totalScore = 0;

var gameRandom= Math.floor((Math.random() * 100) + 19)


function gameStart() {
  gameRandom= Math.floor((Math.random() * 100) + 19)
  randomNumber.innerHTML = gameRandom;
console.log(gameRandom);

var predictA= Math.floor((Math.random() * 11) + 1)


$("#red").on("click", function() {
  totalScore = totalScore + predictA;
  $("#totalScore").html(totalScore);

  checkWin();

});

var predictB= Math.floor((Math.random() * 11) + 1)
$("#green").on("click", function() {
  totalScore = totalScore + predictB;
  $("#totalScore").html(totalScore);
  checkWin();
});

var predictC= Math.floor((Math.random() * 11) + 1)
$("#blue").on("click", function() {
  totalScore = totalScore + predictC;
  $("#totalScore").html(totalScore);
  checkWin();
});

var predictD= Math.floor((Math.random() * 11) + 1)
$("#yellow").on("click", function() {
  totalScore = totalScore + predictD;
  $("#totalScore").html(totalScore);
  checkWin();
});
console.log(predictA);
console.log(predictB);
console.log(predictC);
console.log(predictD);

function reset() {
  totalScore= 0;
  predictA= 0;
  predictB= 0;
  predictC= 0;
  predictD= 0;
  
}


function checkWin() {
  if (totalScore == gameRandom) {
    wins = wins + 1;
    $("#wins").html("Wins: " + wins);
   reset()
    gameStart();
} else if (totalScore > gameRandom) {
  losses = losses + 1;
  $("#losses").html("Losses: " + losses);
  reset();
  gameStart();
    }
  } 
}

gameStart();

