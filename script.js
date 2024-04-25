const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "London", correct: false },
            { text: "Paris", correct: true },
            { text: "Madrid", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Mercury", correct: false }
        ]
    },
    {
        question: "Who wrote the Harry Potter series?",
        answers: [
            { text: "J.R.R. Tolkien", correct: false },
            { text: "J.K. Rowling", correct: true },
            { text: "Stephen King", correct: false },
            { text: "C.S. Lewis", correct: false }
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "CO2", correct: false },
            { text: "O2", correct: false },
            { text: "CH4", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Vincent van Gogh", correct: false },
            { text: "Claude Monet", correct: false }
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Liver", correct: false },
            { text: "Skin", correct: true },
            { text: "Heart", correct: false },
            { text: "Brain", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button'); 
 
let currenQuestionIndex = 0;
let score = 0;

startQuiz();
function startQuiz(){
    currenQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    console.log(questionElement);
     let currenQuestion = questions[currenQuestionIndex];
     console.log(currenQuestion);
     let questionNo = currenQuestionIndex + 1;
     console.log(questionNo);
     questionElement.innerHTML = `${questionNo}. ${currenQuestion.question} `;

     currenQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn')
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
     })
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(){
    
}