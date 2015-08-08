/* Create Quiz Game */
$(document).ready(function () {
    init();
});

var questions = [{
    question: "What is the tallest 14er in Colorado?",
    choices: ["Mt Elbert", "Mt Evans", "Pikes Peak", "Mt Sherman"],
    qNum: 0,
    correct: 1,
    fact: "Mt Elbert is the tallest 14er at 14,433ft."
}, {
    question: "What's the capital of CO?",
    choices: ["Ft. Collins", "Denver", "Leadville", "Aurora"],
    qNum: 1,
    correct: 2,
    fact: "On August 1, 1876, Denver became the temporary state capital when Colorado was admitted to the Union, and a statewide vote in 1881 made Denver the permanent state capital."
}, {
    question: "In which city is the Air Force Academy located?",
    choices: ["Leadville", "Boulder", "Denver", "Colorado Springs"],
    qNum: 2,
    correct: 3,
    fact: "The United States Air Force Academy, is a military academy for officer candidates for the United States Air Force. Its campus is located in Colorado Springs"
}, {
    question: "What is the nickname for Denver's Lower Down Town?",
    choices: ["Brick House", "Shinsaibashi", "LoDo", "Hipsterville"],
    qNum: 3,
    correct: 2,
    fact: "LoDo, Denver is the lower downtown area of Denver, Colorado, the oldest and original settlement of the city of Denver. It is a mixed-use historic district, known for its nightlife, and serves as an example of success in urban reinvestment and revitalization."
}, {
    question: "What is the elevation in Denver?",
    choices: ["100ft", "5280ft", "14000ft", "1600ft"],
    qNum: 4,
    correct: 1,
    fact: "Denver's nickname is the Mile-High City because its official elevation is one mile or 5280ft above sea level."
}];

var numberCorrect = 0;
var currentQuestion = 0;

// Application loaded, prepare items for display
function init() {
    var html = buildQuestion(questions, currentQuestion);
    $('.question-holder').html(html);
    
    updateQuestion(questions, currentQuestion);
    
    submitAnswer();
    retryQuiz();
}

function buildQuestion(questions, i) {
    var html = '';
    var choices = questions[i].choices;

    for (var i = 0; i < choices.length; i++) {
        html += '<li>';
        html += '<input type="radio" id="in' + i + '" name="option" class="option" value="' + i + '">';
        html += '<label for="in' + i + '" class="answer">' + choices[i] + '</label>';
        html += '</li>';
    }

    return(html)
};

function questionLogic(questions, i) {
    var answer = $('.question-holder input[type="radio"]:checked').val();

    if (questions[i].correct == answer + 1) {
        numberCorrect++;
    }
};

function updateQuestion(questions, i) {
    $('.question').html(questions[i].question);
};

function updateLastFact(questions, i) {
    i = i - 1;
    $('#last_question_fact').html(questions[i].fact);
};

function nextQuestion() {
    if (currentQuestion < 5) {

        var html = buildQuestion(questions, currentQuestion);
        $('.question-holder').html(html);
        $('.question').html(questions[currentQuestion].question);

        updateLastFact(questions, currentQuestion);
    } 
    else {
        var finalScore = '';
        var lastFact = questions[currentQuestion - 1].fact;

        $(".question, #answer_holder input, #answer_holder span").remove();
        $("#submit").hide();
        $("#retry_button").show();

        $("#last_question_fact").html(lastFact);
        
        finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered ' + numberCorrect + ' question';
        
        if(numberCorrect > 1) {
            finalScore += 's';
        }
        
        finalScore += '.';
        
        $("#answer_holder").html(finalScore);
    }
};

function submitAnswer() {
    $("#question_wrapper").on("click", "#submit", function () {

        questionLogic(questions, currentQuestion);
        currentQuestion++;
        nextQuestion();
    });    
};

function retryQuiz() {
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<span class="question">' + questions[currentQuestion].question + '</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">' + questions[currentQuestion].choices[0] + '</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">' + questions[currentQuestion].choices[1] + '</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">' + questions[currentQuestion].choices[2] + '</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">' + questions[currentQuestion].choices[3] + '</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });
};