/*
Description:
You are the rock paper scissors oracle.

Famed throughout the land, you have the incredible ability to predict which hand gestures your opponent will choose out of rock, paper and scissors.

Unfortunately you're no longer a youngster, and have trouble moving your hands between rounds. For this reason, you can only pick a single gesture for each opponent. If it's possible for you to win, you will, but you're also happy to tie.

Given an array of gestures — for example ["paper", "scissors", "scissors"] — return the winning gesture/s in the order in which they appear in the title, separated by a forward slash. For example, if rock and scissors could both be used to win you would return:

"rock/scissors"

If it's not possible for you to win then return:

"tie"
*/
function rpsOracle(games) {
  const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };
  const canWin = {
    rock: false,
    paper: false,
    scissors: false
  };
  for (const game of games) {
    for (const [gesture, beaten] of Object.entries(beats)) {
      if (game === beaten) {
        canWin[gesture] = true;
      }
    }
  }
  const winningGestures = Object.entries(canWin)
    .filter(([_, canWin]) => canWin)
    .map(([gesture, _]) => gesture);
  if (winningGestures.length === 0) {
    return "tie";
  } else {
    return winningGestures.join('/');
  }   
}

console.log(rpsOracle(["paper", "scissors", "scissors"])); // "rock"
console.log(rpsOracle(["rock", "rock", "rock"])); // "paper"
console.log(rpsOracle(["rock", "paper", "scissors"])); // "tie"   