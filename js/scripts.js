// Bussiness logic
var playersArray = []
var turnRollArray = []

function Player(playerName, score) {
  this.playerName= playerName;
  this.score = score;
  playersArray.push(this);
}


Array.prototype.sum = function() {
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
    $("#player1Display").text(playersArray[0].playerName).show();

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
      turnRollArray = [0];
      $("#turnTotal").text(turnRollArray)
      changePlayers();
  }
  });

// player 1
  $("#endTurnBtn").click(function(event){
    changePlayers();
});

  function changePlayers() {
    if ($("#player1Display").is(":visible")) {
    alert("Congrats, " + playersArray[0].playerName + ", you got " + turnRollArray.sum() +  " points!");
    playersArray[0].score = (playersArray[0].score += turnRollArray.sum());
    turnRollArray = [0];
    $("#turnTotal").text(turnRollArray)
    $("#player2Display").text(playersArray[1].playerName).show();
    $("#player1Display").hide();
    console.log(playersArray[0].score);
  } else if ($("#player2Display").is(":visible")){
    alert("Congrats, " + playersArray[1].playerName + ", you got " + turnRollArray.sum() +  " points!");
    playersArray[1].score = (playersArray[1].score += turnRollArray.sum());
    turnRollArray = [0];
    $("#turnTotal").text(turnRollArray)
    $("#player1Display").show();
    $("#player2Display").hide();
    console.log(playersArray[1].score);
  }
  }

});
