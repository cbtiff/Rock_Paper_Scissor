//change counts to win percentages.


var playerScore = 0;
var compScore = 0;
var draw = 0;

document.getElementById('Harley').onclick=playHarley;
document.getElementById('Ivy').onclick=playIvy;
document.getElementById('Catwoman').onclick=playCatwoman;
document.getElementById('reset').onclick=resetGame;

function playHarley() {
  play('Harley');
}
function playIvy() {
  play('Ivy');
}
function playCatwoman() {
  play('Catwoman');
}

function getCompChoice() {
var choices = ['Harley', 'Ivy', 'Catwoman'];
var compChooses = choices[Math.floor(Math.random() * choices.length)];
return compChooses;
}

function play(userPlay) {
  var compChoice = getCompChoice();

  document.getElementById('playerResult').innerHTML = userPlay;
  document.getElementById('compResult').innerHTML = compChoice;

  if (userPlay == 'Harley') {
    if (compChoice == 'Harley') {
    document.getElementById('winner').innerHTML = "It's a tie!";
    draw++;
    }

    else if (compChoice == 'Ivy') {
      document.getElementById('winner').innerHTML = "Poison Ivy beats Harley Quinn";
      compScore++;
    }

    else if (compChoice == 'Catwoman') {
      document.getElementById('winner').innerHTML = "Harley Quinn beats Catwoman";
      playerScore++;
    }
  }

  else if (userPlay == 'Ivy') {
    if (compChoice == 'Ivy') {
    document.getElementById('winner').innerHTML = "It's a tie!";
    draw++;
    }

    else if (compChoice == 'Harley') {
      document.getElementById('winner').innerHTML = "Poison Ivy beats Harley Quinn";
      playerScore++;
    }

    else if (compChoice == 'Catwoman') {
      document.getElementById('winner').innerHTML = "Catwoman beats Poison Ivy";
      compScore++;
    }
  }

  else if (userPlay == 'Catwoman') {
    if (compChoice == 'Catwoman') {
    document.getElementById('winner').innerHTML = "It's a tie!";
    draw++;
    }

    else if (compChoice == 'Harley') {
      document.getElementById('winner').innerHTML = "Harley Quinn beats Catwoman";
      compScore++;
    }

    else if (compChoice == 'Ivy') {
      document.getElementById('winner').innerHTML = "Catwoman beats Poison Ivy";
      playerScore++;
    }
  }

 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;
 document.getElementById('draw').innerHTML = draw;
};

function resetGame () {
 playerScore = 0;
 compScore = 0;
 draw = 0;
 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;
 document.getElementById('draw').innerHTML = draw;
};
