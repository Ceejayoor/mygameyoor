const computerChoiceDisplay = document.getElementById("computer-choice");

const userChoiceDisplay = document.getElementById("user-choice");

const resultDisplay = document.getElementById("result");

const pressed = document.querySelectorAll(".btn");
let userChoice;
let randomChoice;


pressed.forEach(item => item.addEventListener("click", (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  theResult();
}))

function generateComputerChoice(){
randomChoice = Math.floor(Math.random() * pressed.length) + 1;
computerChoiceDisplay.innerHTML = randomChoice;

if(randomChoice === 1){
  computerChoice = "rock";
}
if(randomChoice === 2){
  computerChoice = "paper";
}
if(randomChoice === 3){
  computerChoice = "scissors";
}
computerChoiceDisplay.innerHTML = computerChoice;
}

function theResult(){
if(computerChoice===userChoice){
  result = "its a tie"
}

if(computerChoice==="rock" && userChoice==="paper"){
result = "You win!!"
}
if(computerChoice==="rock" && userChoice==="scissors"){
result = "You lose!!"
}
if(computerChoice==="paper" && userChoice==="rock"){
result = "You lose!!"
}
if(computerChoice==="paper" && userChoice==="scissors"){
result = "You win!!"
}
if(computerChoice==="scissors" && userChoice==="rock"){
result = "You win!!"
}
if(computerChoice==="scissors" && userChoice==="paper"){
result = "You lose!!"
}
resultDisplay.innerHTML = result;

}