const questionArray = [
    {
        questionNumber: "Question 1",
        question: "What unusual object did young Albert Einstein receive as a gift from his father when he was just five years old, sparking his lifelong curiosity about science?",
        buttonA: "Compass",
        buttonB: "Microscope",
        buttonC: "Telescope",
        answer: "Compass"
    },
    {
        questionNumber: "Question 2",
        question: "In which year did Albert Einstein publish his theory of general relativity?",
        buttonA: "1905",
        buttonB: "1915",
        buttonC: "1925",
        answer: "1915"
    },
    {
        questionNumber: "Question 3",
        question: "What is the name of the equation that represents the equivalence of mass and energy, formulated by Einstein?",
        buttonA: "Newton's Law",
        buttonB: "Einstein's Equation",
        buttonC: "E=mc^2",
        answer: "E=mc^2"
    },
    {
        questionNumber: "Question 4",
        question: "Where was Albert Einstein born?",
        buttonA: "Berlin, Germany",
        buttonB: "Vienna, Austria",
        buttonC: "Ulm, Germany",
        answer: "Ulm, Germany"
    },
    {
        questionNumber: "Question 5",
        question: "Which university did Albert Einstein attend?",
        buttonA: "University of Zurich",
        buttonB: "University of Heidelberg",
        buttonC: "University of Munich",
        answer: "University of Zurich"
    }
];

// Element selectors
const score = document.getElementById("score");
const buttonContainer = document.getElementById("button-container");
const buttonA = document.getElementById("button-a");
const buttonB = document.getElementById("button-b");
const buttonC = document.getElementById("button-c");
const nextButton = document.getElementById("next-button");
const question = document.getElementById("question");
const questionBanner = document.getElementById("question-banner");

// Event listeners

// Callback function(s)
let questionIndex = 0;
function checkAnswer(userChoice) {
    if (userChoice === questionArray[questionIndex].answer) {
        currentScore = Number(score.innerText)
        score.innerText = currentScore + 1
        question.innerText = "Correct!"
        question.style.color = "green"
    } else {
        question.innerText = "Incorrect"
        question.style.color = "red"
        
    }
    buttonA.style.visibility = "hidden";
    buttonB.style.visibility = "hidden";
    buttonC.style.visibility = "hidden";

    setTimeout(function(){
        nextQuestion();
    }, 1000);
};

function nextQuestion() {
    questionIndex++
    if (questionIndex < questionArray.length) {
        question.style.color = "black"
        questionBanner.innerText = questionArray[questionIndex].questionNumber;
        question.innerText = questionArray[questionIndex].question;
        buttonA.innerText = questionArray[questionIndex].buttonA;
        buttonB.innerText = questionArray[questionIndex].buttonB;
        buttonC.innerText = questionArray[questionIndex].buttonC;
        buttonA.style.visibility = "visible";
        buttonB.style.visibility = "visible";
        buttonC.style.visibility = "visible";
    } else {
        questionBanner.innerText = "End of quiz";
        question.style.color = "black"
        question.innerText = `You scored ${score.innerText}`;
    }
};
