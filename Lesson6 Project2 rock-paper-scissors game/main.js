const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const play = document.getElementById("play");
let currentlySelected = document.getElementById("currentlySelected");

let computer = (Math.random());
let computerMove = '';
let myMove = '';
computerOutcome();

function computerOutcome(){
    true;
    false;

    if(computer >= 0 && computer < 1/3){
        computerMove = 'rock';
        console.log('computerMove = ' + computerMove)
    } else if (computer >= 1/3 && computer < 2/3){
        computerMove = 'paper';
        console.log('computerMove = ' + computerMove)
    } else if (computer >= 2/3 && computer < 1){
        computerMove = 'scissors';
        console.log('computerMove = ' + computerMove);
    }
}

rock.addEventListener("click", () => {
    currentlySelected.innerText = 'rock';
    myMove = 'rock';
})
paper.addEventListener("click", () => {
    currentlySelected.innerText = 'paper';
    myMove = 'paper';
})
scissors.addEventListener("click", () => {
    currentlySelected.innerText = 'scissors';
    myMove = 'scissors';
})
play.addEventListener("click", () => {
    if(myMove === ''){
        return;
    }
    if(myMove === 'rock'){
        playGame('rock');
    } else if(myMove === 'paper'){
        playGame('paper');
    } else{
        playGame('scissors');
    }
    if(computerMove === 'rock'){
        if(myMove === 'rock'){
            result = 'Tie';
        } else if(myMove === 'paper'){
            result = 'You won';
        } else{
            result = 'You lost';
        }
    } else if(computerMove === 'paper'){
        if(myMove === 'rock'){
            result = 'You won';
        } else if(myMove === 'paper'){
            result = 'Tie';
        } else{
            result = 'You won';
        }
    } else{
        if(myMove === 'rock'){
            result = 'You won';
        } else if(myMove === 'paper'){
            result = 'You won';
        } else{
            result = 'Tie';
        }
    }

    alert(`${result}, you chose ${myMove}, computer chose ${computerMove}`)
    currentlySelected.innerText = 'none currently selected';
    computer = (Math.random());
    computerOutcome();
    myMove = '';
})


// This was my solution before following tutorial

/*
rock.addEventListener("click", () => {
    computer = Math.floor(Math.random() * 3) + 1;
    if(computer === 1){
        alert('You picked rock. Computer picked rock. It is a draw');
    } else if(computer === 2){
        alert('You picked rock. Computer picked paper. You lose');
    } else {
        alert('You picked rock. Computer picked scissors. You win');
    }
})
paper.addEventListener("click", () => {
    computer = Math.floor(Math.random() * 3) + 1;
    if(computer === 1){
        alert('You picked paper. Computer picked rock. You win');
    } else if(computer === 2){
        alert('You picked paper. Computer picked paper. It is a draw');
    } else {
        alert('You picked paper. Computer picked scissors. You lose');
    }
})
scissors.addEventListener("click", () => {
    computer = Math.floor(Math.random() * 3) + 1;
    if(computer === 1){
        alert('You picked scissors. Computer picked rock. You lose');
    } else if(computer === 2){
        alert('You picked scissors. Computer picked paper. You win');
    } else {
        alert('You picked scissors. Computer picked scissors. It is a draw');
    }
})
*/