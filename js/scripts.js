// Bussiness logic
var playersArray = []
var turnRollArray = []

function Player(playerName, score) {
  this.playerName= playerName;
  this.score = score;
  playersArray.push(this);
}

Array.prototype.sum = function(playersArray) {
  return this.reduce(function(a,b) {return a + b});
}
// var rollSum = function(turnRollArray) {
//   var total = 0
//   turnRollArray.forEach(function(x){
//     total + x;
//   });
//   return total;
// }




// UI logic
$(document).ready(function() {
  // Player name submit button
  $("#playerNameSubmit").click(function(event) {
    event.preventDefault();
    var player1Name = $("#player1Name").val();
    var player2Name = $("#player2Name").val();

    var player1 = new Player(player1Name, 0)
    var player2 = new Player(player2Name, 0)

  });
  $("#diceRoll").click(function(event) {
    event.preventDefault();
    $("#rollResult").show();
    var randomRoll = (1 + Math.floor(Math.random() * 6));
    turnRollArray.push(randomRoll);
    console.log(turnRollArray.sum());
    $("#rollResult").text(randomRoll);
  });


});
