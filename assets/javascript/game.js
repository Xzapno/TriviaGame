$(document).ready(function() {

    // -- Set Variables -- //

       var seconds = 60;
       var quizContainer = document.getElementById('quiz');
       var correctAnswers = 0;
       var wrongAnswers = 0;
       var unaswered = 0;
   

    // -- Hide/Reveal Divs & Buttons -- //

        $("#game, #score").hide();

        $("#btnStart").click(function() {
            $("#start").hide();
            $("#game").show();
            counter();
            generateQuiz();
            showQuestions();
        });

        $("#btnSubmit").click(function() {
            $("#game").hide();
            $("#score").show();

        });

        $("#btnRestart").click(function() {
            $("#score").hide();
            $("#start").show();
        });

    // -- Quiz Functions & variables --//

        function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

            function showQuestions(questions, quizContainer){
                // Create a container for the questions & answers
                var output = [];
                var answers;

                for(var i = 0; i,questions.length; i++){
                    answers = [];
                    for(letter in questions[i].answers){
                        answers.push(
                            '<label>'
                            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                            + letter + ': '
                            + questions[i].answers[letter]
                            + '</label'
                        );
                    }

                    output.push(
                        '<div class="question">' + questions[i].questions + '</div>'
                        + '<div class="answers">' + answers.join('') + '</div>'
                    );
                }
            
            }

            function showResults(questions, quizContainer, resultsContainer){

            }

            showQuestions(questions, quizContainer);

            submitButton.onclick = function(){
                showResults(questions, quizContainer, resultsContainer);
            }

        }

        var myQuestions = [

            {
                question: "1. What artist is credited with creating Batman?",
                answers: {
                    a: 'Jack Kirby',
                    b: 'Bob Kane',
                    c: 'Joe Schuster'
                },
                correctAnswer: 'b'
            },
            {
                question: "What comicbook featured the first appearnace of Batman?",
                answers: {
                    a: 'Action Comics #1',
                    b: 'Amazing Fantasy #15',
                    c: 'Detective Comics #27'
                },
                correctAnswer: 'c'
            }
            
        ];


    // -- Timer -- /

        function timer(){
            seconds--;
            $("#timerDisplay").html("<h1>Time Remaining: " + seconds + " Seconds</h1>");
        }

        function counter(){
            setInterval(timer, 1000);
        }



    // -- Scoring -- //

    function scoring() {

        alert("Times Up!");

        $("#game").hide();
        $("#score").show();

        var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
        var Q10 = $('input:radio[name="q10"]:checked').val();
        
        if(Q1 == undefined) {
            unanswered++;
        } else if(Q1 == "c"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q2 == undefined) {
            unanswered++;
        } else if(Q2 == "b"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q3 == undefined) {
            unanswered++;
        } else if(Q3 == "d"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q4 == undefined) {
            unanswered++;
        } else if(Q4 == "c"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q5 == undefined) {
            unanswered++;
        } else if(Q5 == "b"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q6 == undefined) {
            unanswered++;
        } else if(Q6 == "d"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q7 == undefined) {
            unanswered++;
        } else if(Q7 == "c"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q8 == undefined) {
            unanswered++;
        } else if(Q8 == "c"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q9 == undefined) {
            unanswered++;
        } else if(Q9 == "c"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        if(Q10 == undefined) {
            unanswered++;
        } else if(Q10 == "a"){
            correctAnswer++;
        } else {
            wrongAnswer++;
        }

        $("#correctDisplay").html("<h1>Correct Answer: </h1>" + correctAnswers);
        $("#incorrectDisplay").html("<h1>Incorrect Answers: </h1>" + wrongAnswers);
        $("unanswered").html("<h1>Unanswered: </h1>" + unaswered);

    }  

});