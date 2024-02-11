let dice1 = document.getElementById("member-1");
let dice2 = document.getElementById("member-2");
let dice3 = document.getElementById("member-3");
let winner = document.getElementById("winner");

let roll = document.getElementById("roll");

let randomNum1 = Math.ceil(Math.random() * 6);
let randomNum2 = Math.ceil(Math.random() * 6);
let randomNum3 = Math.ceil(Math.random() * 6);
console.log(randomNum1);

roll.addEventListener("click", function () {
    diceNum();
})

function diceNum() {
    dice1.innerText = randomNum1;
    dice2.innerText = randomNum2;
    dice3.innerText = randomNum3;
    if (randomNum1 === randomNum2 && randomNum2 === randomNum3) {
        dice1.style = "background-color:blue";
        dice2.style = "background-color:blue";
        dice3.style = "background-color:blue";
        winner.innerText = "Tied";
    }
    if (randomNum1 === randomNum2) {
        if (randomNum3 > randomNum2) {
            dice1.style = "background-color:blue";
            dice2.style = "background-color:blue";
            dice3.style = "background-color:green";
            winner.innerText = "Member-3"
        }
        if (randomNum3 < randomNum2) {
            dice1.style = "background-color:blue";
            dice2.style = "background-color:blue";
            dice3.style = "background-color:yellow";
            winner.innerText = "Tied"
        }
    }
    else if (randomNum3 === randomNum2) {
        if (randomNum1 > randomNum2) {
            dice1.style = "background-color:green";
            dice2.style = "background-color:blue";
            dice3.style = "background-color:blue";
            winner.innerText = "Member-1";
        }
        if (randomNum1 < randomNum2) {
            dice1.style = "background-color:yellow";
            dice2.style = "background-color:blue";
            dice3.style = "background-color:blue";
            winner.innerText = "Tied"
        }

    }
    else if (randomNum1 === randomNum3) {
        if (randomNum2 > randomNum3) {
            dice1.style = "background-color:blue";
            dice2.style = "background-color:green";
            dice3.style = "background-color:blue";
            winner.innerText = "Member-2";
        }
        if (randomNum2 < randomNum3) {
            dice1.style = "background-color:blue";
            dice2.style = "background-color:yellow";
            dice3.style = "background-color:blue";
            winner.innerText = "Tied"
        }

    }
    else if (randomNum1 > randomNum2 && randomNum1 > randomNum3) {
        winner.innerText = "Member-1";
        dice1.style = "background-color:green";
        if (randomNum2 > randomNum3) {
            dice2.style = "background-color:yellow";
            dice3.style = "background-color:red";
        }
        else {
            dice2.style = "background-color:red";
            dice3.style = "background-color:yellow";
        }
    } else if (randomNum2 > randomNum3 && randomNum2 > randomNum1) {
        winner.innerText = "Member-2";
        dice2.style = "background-color:green";
        if (randomNum1 > randomNum3) {
            dice1.style = "background-color:yellow";
            dice3.style = "background-color:red";
        }
        else {
            dice1.style = "background-color:red";
            dice3.style = "background-color:yellow";
        }

    }
    else {
        winner.innerText = "Member-3";
        dice3.style = "background-color:green";
        if (randomNum1 > randomNum2) {
            dice1.style = "background-color:yellow";
            dice2.style = "background-color:red";
        }
        else {
            dice1.style = "background-color:red";
            dice2.style = "background-color:yellow";
        }
    }
}