// Select Elements
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("score_counter");
const nextBtn = document.getElementById("next_btn");

// Create questions using array of objects
let questions = [
    {   question: "1. Who is the Current President of Nigeria?",
        choiceA: "A. Buhari",
        choiceB: "B. Tafawa Belewa",
        choiceC: "C. Obasanjo",
        choiceD: "D. Yar'Adua", 
        correct: "A"
    },
    
    {   question: "2. Who discovered river Niger?",
        choiceA: "A. Buhari",
        choiceB: "B. Tafawa Belewa",
        choiceC: "C. Mongo Park",
        choiceD: "D. Dora Akuyili", 
        correct: "C"
    },
    
    {   question: "3. When did Nigeria become a Republic?",
        choiceA: "A. 2020",
        choiceB: "B. 1963",
        choiceC: "C. 1914",
        choiceD: "D. 1986", 
        correct: "B"
    },

    {   question: "4. What does NTA Stand for?",
        choiceA: "A. National Telecast Association",
        choiceB: "B. Nigeria Television Authority",
        choiceC: "C. Nigeria Telecommunication Action",
        choiceD: "D. Nigeria Television Authority", 
        correct: "D"
    },

    {   question: "5. What date is Nigeria National Day?",
        choiceA: "A. 3rd May",
        choiceB: "B. 17th August",
        choiceC: "C. 8th December",
        choiceD: "D. 1st October", 
        correct: "D"
    }
];

// Event Listeners
nextBtn.addEventListener("clcik", loadNextQuestion);
choiceA.addEventListener("click", checkAnswer);

//Variables
let runningQuestion = 0;
let score = 0;
let totalQuestions = questions.length;

// Render Questions Function
function renderQuestion () {
	let q = questions[runningQuestion];
	question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// Load Next Question Function
function loadNextQuestion () {
	let selectedOption = document.querySelector(".choice");
	if(questions[runningQuestion].correct == selectedOption){
		score ++;
	}
	runningQuestion++;
	if(runningQuestion == totalQuestions - 0){
		nextBtn.textContent = 'Finished!';
    }
    renderQuestion(runningQuestion);
}

// Check Answer function
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementsByClassName(".choice").style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementsByClassName(".choice").style.backgroundColor = "#f00";
}

// Calling render question function
renderQuestion(questions);
checkAnswer(questions);



