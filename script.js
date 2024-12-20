let machineSelection = machineChoice();
let humanSelection = humanChoice();
let humanScore = 0;
let machineScore = 0;
console.log(
  `The human has chosen ${humanSelection}. The machine has chosen ${machineSelection}`
);

playRound(humanSelection, machineSelection);

function machineChoice() {
  let machineRoll = Math.floor(Math.random() * 3); //choice will be one of 3 random numbers 0-2
  let result; //initialize result

  //using a switch, each roll # is assigned a value of rock,paper, or scissors.
  switch (machineRoll) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
  }

  return result;
}
//end machineChoice function

function humanChoice() {
  let humanInput = prompt(
    "You have been challenged to Rock, Paper, Scissors. Enter your choice! "
  );

  let result = humanInput.trim().toLowerCase();
  console.log(typeof humanInput); //if user hits cancel returns object data type, but null itself is a primitive data type. let it be known that this is the first time I have experienced this bug on my own! ^-^

  if (result === "") {
    humanInput = prompt("Please, make a choice. Or cancel...loser");
  }
  //my logic at this stage: I am checking if the user enters nothing. I thought null would be what to check, but null only applies when a user hits the cancel button. If they are hitting the cancel button, its assumed they dont want to enter anything. So rather, I think I should check if a user hits ok or enter, but doesnt actually enter anything, ie an empty string.

  //update: I came up with assigning the humanInput to a result variable that trims and lowercases the input. that way after checking if result is an empty string, all we do is return the result!

  return result;
}
// end humanChoice function

function playRound(humanChoice, machineChoice) {
  //rock beats scissors 0
  //scissors beats paper 1
  //paper beats rock 2
  // if humanChoice == rock && machineChoice == scissors. check for a winning solution for the human, otherwise the machine wins.

  console.log(humanChoice, machineChoice);
}
