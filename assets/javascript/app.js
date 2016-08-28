$(function() {
 
  // Questions object
  var Questions = {
    1: {
      question_text: 'What is the capital of Zaiire?',
      answer_one: 'Answer One',
      answer_two: 'Answer Two',
      answer_three: 'Answer Three',
      answer_four: 'Answer Four',
      correct_answer: 'Answer One'
    },
    2: {
      question_text: 'Is this question two?',
      answer_one: 'Answer One',
      answer_two: 'Answer Two',
      answer_three: 'Answer Three',
      answer_four: 'Answer Four',
      correct_answer: 'Answer Two'
    }
  };


  // set global vars
  var $question = $('.Question'),
      $radio = $('.radio'),
      $counter = 1,
      $totalQuestions = 0,
      $rightAnswer = 0,
      $wrongAnswer = 0,
      $unAnswered = 0,
      $startIntID,
      $allottedTime = 15;


  // set total # of questions in var: $totalQuestions
  for(var question in Questions) {
    $totalQuestions++; // number of questions
  }






  // game object
  var game = {

    // set vars
    questionContainer: $('.Question'),
    radio: $('input[type="radio"]'),
    timer: $('.timer'),


    
    // init
    init: function() {

      // get a question
      this.getQuestion();
      

    },

    // radio button template
    radioTemplate: function(answer) {
      return  '<label class="radio">' +
              '  <input type="radio" name="question_' + $counter + '" value="' + answer + '" />' +
              '  <span class="radio__label">' + answer + '</span>' +
              '</label>';
    },

    getQuestion: function() {
      this.questionContainer.find('.Question__text').html(Questions[$counter].question_text);
      this.questionContainer.find('.Question__answers form')
        .append(this.radioTemplate(Questions[$counter].answer_one))
        .append(this.radioTemplate(Questions[$counter].answer_two))
        .append(this.radioTemplate(Questions[$counter].answer_three))
        .append(this.radioTemplate(Questions[$counter].answer_four));

      // empty message
      this.questionContainer.find('.Question__message').empty();

      // start timer
      this.startTimer();

      // check question
      this.checkQuestion();
    },


    checkQuestion: function() {
      
      $('input[type="radio"]').on('change', function() {

        // clear interval
        clearInterval($startIntID);

        if(Questions[$counter].correct_answer === this.value) {
          game.isRight();
        } else {
          game.isWrong();
        }

        // $question.addClass('animated fadeOut');

        // empty form answers
        game.questionContainer.find('.Question__answers form').empty();

        // check if last, or get next question
        // game.isLastQuestion();

        // increment counter
        $counter++;


      });


    },

    isRight: function() {
      console.log('you guessed right and count is ' + $counter);
      $message = "<p>congrats! you got it right.</p>";
      $rightAnswer++;
      this.transition($message);
    },

    isWrong: function() {
      console.log('you guessed wrong and count is ' + $counter  );
      $message = "<p>oooo, sorry. that was not the right answer.</p>";
      $wrongAnswer++;
      this.transition($message);
    },

    isUnanswered: function() {
      // clear interval
      clearInterval($startIntID);

      // increment unanswered questions
      $unAnswered++;

      // increment counter
      $counter++;

      // empty form answers
      game.questionContainer.find('.Question__answers form').empty();

      // check if last, or get next question
      game.isLastQuestion();
    },

    transition: function($message) {
      this.questionContainer.find('.Question__message').html($message + Questions[$counter].correct_answer);
      setTimeout(function() {
        game.isLastQuestion();
      }, 1000*3);
    },






    isLastQuestion: function() {
      if ($counter > $totalQuestions) {
        this.gameOver();
      } else {
        this.getQuestion();
      }

    },


    gameOver: function() {
      console.log('game over');
      console.log('you got ' + $rightAnswer + ' answers correct.');
      console.log('you got ' + $wrongAnswer + ' answers incorrect.');
      console.log('you left ' + $unAnswered + ' answers blank.');
    },


    startTimer: function() {
      // put 15 up on the board
      game.timer.html($allottedTime);
      
      // start timerCount at 0
      var timerCount = 0;

      // start timer
      $startIntID = setInterval(function() {
        
        timerCount++;
        game.timer.html($allottedTime - timerCount);

        if(timerCount === $allottedTime) {
          game.isUnanswered();
        }
        
      }, 1000);

    }










  } // end game object





  game.init();











});