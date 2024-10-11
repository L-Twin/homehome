"use strict";

function askQuestion(answer, question) {
    const userAnswer = prompt(question);

    if (userAnswer.toLowerCase() === answer) {
        alert("Correct!");
    } else {
        alert("Sorry, the correct answer is " + answer);
    }
}

function puzzle(){
    askQuestion('лук', 'Сидит дед во 100 шуб одет, кто его раздевает тот слезы проливает');
    askQuestion('елка', 'Зимой и летом одним цветом');
}

puzzle();