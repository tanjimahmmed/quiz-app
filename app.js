const quizData = [
    {
        question: 'What is your favorite language?',
        a: 'JavaScript',
        b: 'Go',
        c: 'PHP',
        d: 'Java',
        correct: 'a'
    },
    {
        question: 'What is your most used programing language 2020?',
        a: 'Java',
        b: 'Go',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'What is your favorite movie?',
        a: 'Tenet',
        b: 'Bad Boys for life',
        c: 'John Wick: Chapter 3',
        d: 'Mission: Impossible - Fallout',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript Language?',
        a: '1990',
        b: '1992',
        c: '1996',
        d: 'none of the above',
        correct: 'c'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {


    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();


    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Todo show result
            quiz.innerHTML = `<h2>Your answered correctly at ${score}/${quizData.length} question.</h2> <button onclick="location.reload()">Reload</button>`;
            // alert("You finished! Get Yourself an orange Lemonade")
        }
    }

});