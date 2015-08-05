/* Create Quiz Game */
$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "What is the tallest 14er in Colorado?",
        choices: ["Mt Elbert", "Mt Evans", "Pikes Peak", "Mt Sherman"],
        qNum : 0,
        correct : 1,
        fact: "Mt Elbert is the tallest 14er at 14,433ft."
        },
        {
        question: "What's the capital of CO?",
        choices: ["Ft. Collins", "Denver", "Leadville", "Aurora"],
        qNum : 1,
        correct : 2,
        fact: "On August 1, 1876, Denver became the temporary state capital when Colorado was admitted to the Union, and a statewide vote in 1881 made Denver the permanent state capital."
        },
        {
        question: "In which city is the Air Force Academy located?",
        choices: ["Leadville", "Boulder", "Denver", "Colorado Springs"],
        qNum : 2,
        correct : 3,
        fact: "The United States Air Force Academy, is a military academy for officer candidates for the United States Air Force. Its campus is located in Colorado Springs"
        },
        {
        question: "What is the nickname for Denver's Lower Down Town?",
        choices: ["Brick House", "Shinsaibashi", "LoDo", "Hipsterville"],
        qNum : 3,
        correct : 2,
        fact: "LoDo, Denver is the lower downtown area of Denver, Colorado, the oldest and original settlement of the city of Denver. It is a mixed-use historic district, known for its nightlife, and serves as an example of success in urban reinvestment and revitalization."
        },
        {
        question: "What is the elevation in Denver?",
        choices: ["100ft", "5280ft", "14000ft", "1600ft"],
        qNum : 4,
        correct : 1,
        fact: "Denver's nickname is the Mile-High City because its official elevation is one mile or 5280ft above sea level."
    }]

    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;

        $("#question_wrapper").on("click", "#submit", function () {
        currentQuestion++;
        nextQuestion();
    });

        $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
            $("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact = questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});

// var totRight = 0;
// /* Question 1 */
// var correctGuessOne = false;
// var answerOne = 'Mt Elbert'
// var questionOne = prompt("What is the tallest 14er in Colorado?");
// console.log(questionOne);
// if ( questionOne.toUpperCase() === answerOne.toUpperCase() ) {
//   correctGuessOne = true;
//   totRight += 1;
//   console.log(correctGuessOne);
//   document.write("<p>Great Job!</p>");
// } else {
//   document.write("<p>Sorry, but nice try</p>");
// }

// //Question 2
// var correctGuessTwo = false;
// var answerTwo = 'Denver';
// var questionTwo = prompt("What's the capital of CO?");
// console.log(questionTwo);
// if ( questionTwo.toUpperCase() === answerTwo.toUpperCase() ) {
//   correctGuessTwo = true;
//   totRight += 1;
//   console.log(correctGuessTwo);
//   document.write("<p>Great Job!</p>");
// } else {
//   document.write("<p>Sorry, but nice try</p>");
// }

// //Question 3
// var correctGuessThree = false;
// var answerThree = 'Colorado Springs';
// var questionThree = prompt("Which is the Air Force Academy located?");
// console.log(questionThree);
// if ( questionThree.toUpperCase() === answerThree.toUpperCase() ) {
//   correctGuessThree = true;
//   totRight += 1;
//   console.log(correctGuessThree);
//   document.write("<p>Great Job!</p>");
// } else {
//   document.write("<p>Sorry, but nice try</p>");
// }

// //Question 4
// var correctGuessFour = false;
// var answerFour = 'LoDo';
// var questionFour = prompt("What is the nickname for Denver's Lower Down Town?");
// console.log(questionFour);
// if ( questionFour.toUpperCase() === answerFour.toUpperCase() ) {
//   correctGuessFour = true;
//   totRight += 1;
//   console.log(correctGuessFour);
//   document.write("<p>Great Job!</p>");
// } else {
//   document.write("<p>Sorry, but nice try</p>");
// }

// //Question 5
// var correctGuessFive = false;
// var answerFive = '5,280 feet';
// var questionFive = prompt("What is the elevation in Denver?");
// console.log(questionFive);
// if ( questionFive.toUpperCase() === answerFive.toUpperCase() ) {
//   correctGuessFive = true;
//   totRight += 1;
//   console.log(correctGuessFive);
//   document.write("<p>Great Job!</p>");
// } else {
//   document.write("<p>Sorry, but nice try</p>");
// }

// //Message to user regarding how many questions correct

// if ( totRight === 5 ) {
//   alert("Congrats! You got all of the questions right.  You get a Gold Crown!");
// } else if ( totRight === 4 || totRight === 3 ) {
//   alert("Congrats! You get a Silver Crown!");
// } else if ( totRight === 2 || totRight === 1 ) {
//   alert("Congrats! You get a Bronze Crown!");
// } else if ( totRight === 0 ) {
//   alert("Sorry, you did not get any questions right.  Please try again.");
// }