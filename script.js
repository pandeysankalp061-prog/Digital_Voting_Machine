let votesA = 0;
let votesB = 0;

const voteA = document.querySelector(".vote-a");
const voteB = document.querySelector(".vote-b");

const btnA = document.querySelector(".btn-a");
const btnB = document.querySelector(".btn-b");

const winner = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset-btn");

btnA.addEventListener("click", function () {
    votesA++;
    voteA.textContent = votesA;
    checkWinner();
});

btnB.addEventListener("click", function () {
    votesB++;
    voteB.textContent = votesB;
    checkWinner();
});

function checkWinner() {
    if (votesA > votesB) {
        winner.textContent = "Candidate A is Winning!";
    } else if (votesB > votesA) {
        winner.textContent = "Candidate B is Winning!";
    } else {
        winner.textContent = "It's a Tie!";
    }
}

resetBtn.addEventListener("click", function () {
    votesA = 0;
    votesB = 0;

    voteA.textContent = 0;
    voteB.textContent = 0;

    winner.textContent = "No Winner Yet";
});
