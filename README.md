# _Pig Dice_

#### _An exciting dice game of chance, August 24 2016_

#### By _**Kevin Johnston and Katy Henning**_

## Description

_Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold" aka end their turn:

* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold" "end turn", their turn total is added to their score, and it becomes the next player's turn.
*The first player to score 100 or more points wins._

## Setup/Installation Requirements

1. Clone this repository at:
  * https://github.com/kjohnston1149/pig-dice
  * https://github.com/KatyCodes/pig-dice
2. Move into the project folder
3. Open index.html in the browser of your choice (we suggest Chrome)

## Specifications

* Assigns player names and starting score of 0 into object.
  * Example Input: Katy
  * Example Output: Player 1 {Katy, 0}

* Generate random, whole number between 1-6 when prompted
  * Example Input: Roll.click()
  * Example Output: 1 || 2 || 3 || 4 || 5 || 6

* Sums all subsequent rolls in a single turn
  * Example Input: Rolls of (1, 3, 3, 6)
  * Example Output: Turn total: 13

* Removes turn total and ends turn if 1 is rolled.
  * Example Input: Roll = 1
  * Example Output: "Oh no! You don't get any points! End turn"

* Adds turn total to given player's total score.
  * Example Input: (Player 1 total score =20) endTurn.click(), turn total = 30
  * Example Output: Player 1 total = 50

* Change display and inputs for second player's turn.
  * Example Input: Player 1 turn ends (endTurn.click() or 1 is rolled)
  * Example Output: Player 2- GO!

* Ends game when player reaches 100 points
  * Example Input: Player1 total score => 100
  * Example Output: "Player one wins!"

*
  * Example Input:
  * Example Output:


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_For help, contact:_
* [kjohnston1149@gmail.com](mailto:kjohnston1149@gmail.com)
* [katyannhenning@gmail.com](mailto:katyannhenning@gmail.com)

## Technologies Used

_This application uses HTML, CSS, JavaScript & jQuery, Bootstrap_

### License

This website is licensed under the MIT license

Copyright (c) 2016 **_Kevin Johnston & Katy Henning_**
