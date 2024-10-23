const choices = document.querySelectorAll(".choice");
const msgpara = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game was draw play again."
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChioce) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! Your ${userChoice} beats ${compChioce}`
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChioce} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }

}

const playGame = (userChoice) => {
    const compChioce = genCompChoice();
    if (userChoice === compChioce) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChioce === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChioce === "scissors" ? false : true;
        } else {
            userWin = compChioce === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChioce);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});