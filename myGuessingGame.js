var question2 = "What word becomes shorter when you add two letters to it?";
var correctGuess1 = "Whoo hoo!! You actually got it. \nBut do you think you're smart enough to get two in a row?";
var incorrectGuess1 = "What?? It's MARY of course!! \nLet's try another one..";
var correctGuess2 = "Well, SHOOT! Thought I had you there. \nGreat job!!";
var incorrectGuess2 = "Ah, HA! Sucker... I got you. The answer is 'short'. \nGood try though!";

var guess1 = prompt("Mary's father has 5 daughters. Nana, Nene, Nini, Nono. What is the fifth daughters name?");
var guess1NoCap = guess1.toLowerCase();

if (guess1NoCap === "mary") {
  alert(correctGuess1);
  var guess2 = prompt(question2);
  var guess2NoCap = guess2.toLowerCase();
  if (guess2NoCap === "short") {
    alert(correctGuess2);
  }
  else {
    alert(incorrectGuess2);
  }
}

else {
  alert(incorrectGuess1);
  var guess2 = prompt(question2);
  var guess2NoCap = guess2.toLowerCase();
  if (guess2 === "short") {
    alert(correctGuess2);
  }
  else {
    alert(incorrectGuess2);
  }
}
