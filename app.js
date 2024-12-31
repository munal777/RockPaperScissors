let buttons = document.querySelectorAll('.btn')
let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let resetBtn = document.querySelector('.reset-btn');
let msgDisplay = document.querySelector('.com-choice');
let displayWinner = document.querySelector('.winner');

let player_score = 0;
let computer_score = 0;

const comChoice = () => {
    const generater = Math.floor(Math.random() * 3)
    return generater;
}

const getComputerChoice = (ComputerChoiced) => {
    if (ComputerChoiced == 0)
    {
        msgDisplay.innerText = 'Computer Choose Rock';
        msgDisplay.style.display = 'flex';
    }
    else if (ComputerChoiced == 1)
    {
        msgDisplay.innerText = 'Computer Choose Paper';
        msgDisplay.style.display = 'flex';
    }
    else {
        msgDisplay.innerText = 'Computer Choose Scissor';
        msgDisplay.style.display = 'flex';
    }
};

//the function that determine the result by seeing player & computer choice
const result = (player_choice,com_choice) => {
    if (player_choice==0 && com_choice==2 || player_choice==1 && com_choice==0 || player_choice==2 && com_choice==1)
    {
        player_score++;
        player.innerText = player_score;
        displayWinner.innerText = 'Player Win!'
        displayWinner.style.display = 'flex';
    }
    else if (player_choice == com_choice)
    {
        displayWinner.innerText = 'Draw!'
    }
    else {
        computer_score++;
        computer.innerText = computer_score;
        displayWinner.innerText = 'Computer Win!'
        displayWinner.style.display = 'flex';
    }
    getComputerChoice(com_choice);
}

const player_choose = (choice) => {
    return choice;
};

buttons[0].addEventListener('click', () => {
    result(player_choose(0),comChoice())
});

buttons[1].addEventListener('click', () => {
    result(player_choose(1),comChoice())
});

buttons[2].addEventListener('click', () => {
    result(player_choose(2),comChoice())
});


const reset_game = () => {
    player_score = 0;
    computer_score = 0;
    player.innerText = player_score;
    computer.innerText = computer_score;
    msgDisplay.innerText = '';
    displayWinner.innerText = '';
};

resetBtn.addEventListener('click', reset_game);
