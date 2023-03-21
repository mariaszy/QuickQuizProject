const question =document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text")); /*catch elemens directly to array, with 4 choices ABCD*/

let currentQuestion = {}; /*obiekt bedzi potrzebny do zapisywania wylosowanych pytan*/
let acceptingAnswers = true;
let score = 0; /*CORRECT BONUS =10*/
let questionCounter = 0;
let availableQuestions = [];

let questions = [ /*to jest tablica obietów, kazdy obiekt ma pytanie, opcje, odp, numer w tablicy*/
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>", /*choice1 to property któremu tutaj nadaje wartość*/
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for reffering to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World')",
        choice2: "alertBox('Hello World')",
        choice3: "msg('Hello World')",
        choice4: "alert('Hello World')",
        answer: 4
    },

]

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3; 

startGame = () => { /*funkcja ustawia poczatkowe parametry i wywołuje funkcje losujaca pytanie*/
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]; /* robie kopie całej tablicy, ale potem juz nie beda dostepne wszystkie pytania */
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    questionCounter++; /*pytanie 0, inkrementacja po wykonaniu*/
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); /*losuje nr pytania, index tablicy questions*/
    currentQuestion = availableQuestions[questionIndex]; /*odwołanie do wylosowanego elementu tablicy*/
    question.innerText = currentQuestion.question; /*zastepuje dummy pytanie z h2 wylosowanym pytaniem*/
    console.log(choices, 'dupa');
    choices.forEach ( choice => { /* choice to nazwa obiektu z tablicy choices i otwieram ciało*/ 
    /* .forEach method executes a provided function once for each array element*/
    
    const number = choice.dataset['number']; /* find out what is dataset*/
        choice.innerText = currentQuestion['choice' + number]; /* find out what is for Each*/
   })
    
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true // to jest flaga --> poczytaj więcej
};

choices.forEach( choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice =e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        console.log(selectedAnswer);
        getNewQuestion ();
    });
});
    
startGame ();