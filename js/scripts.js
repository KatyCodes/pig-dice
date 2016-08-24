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


// UI logic
$(document).ready(function() {
  // Player name submit button
  $("form#playerNameForm").submit(function(event) {
    event.preventDefault();
    // debugger;
    var player1Name = $("#player1Name").val();
    var player2Name = $("#player2Name").val();
    var player1 = new Player(player1Name, 0);
    var player2 = new Player(player2Name, 0);

  });

  $("#diceRoll").click(function(event) {
    event.preventDefault();
    $("#rollResult").show();
    $(".showTurnTotal").show();
    var randomRoll = (1 + Math.floor(Math.random() * 6));
    $("#rollResult").text(randomRoll);
    if (randomRoll >= 2) {
      turnRollArray.push(randomRoll);
      $("#turnTotal").text(turnRollArray.sum());
    } else {
    alert("You lost this round! NO POINTS FOR YOU!");
      turnRollArray = [];
      $("#turnTotal").text(turnRollArray)
    return;
  }
  });



});
