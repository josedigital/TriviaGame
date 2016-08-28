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
  var $counter = 1,
      $totalQuestions = 0,
      $rightAnswer = 0,
      $wrongAnswer = 0,
      $unAnswered = 0,
      $startIntID,
      $transitionDelay = 3,
      $allottedTime = 5;


  // set total # of questions in var: $totalQuestions
  for(var question in Questions) {
    $totalQuestions++; // number of questions
  }






  // game object
  var game = {

    // set vars
    questionContainer: $('.Question'),
    messageContainer: $('.Question__message'),
    radio: $('input[type="radio"]'),
    timer: $('.timer'),
    restartButton: $('.Restart__button'),


    
    // init
    init: function() {

      // hide button
      this.restartButton.removeClass('animated fadeInUp').addClass('hidden');

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
      // add question to DOM
      this.questionContainer.find('.Question__text').html(Questions[$counter].question_text);
      this.questionContainer.find('.Question__answers form')
        .append(this.radioTemplate(Questions[$counter].answer_one))
        .append(this.radioTemplate(Questions[$counter].answer_two))
        .append(this.radioTemplate(Questions[$counter].answer_three))
        .append(this.radioTemplate(Questions[$counter].answer_four));

      // empty message
      this.messageContainer.empty();

      // start timer
      this.startTimer();

      // check question
      this.checkQuestion();
    },


    checkQuestion: function() {
      
      $('input[type="radio"]').on('change', function() {

        // clear interval
        clearInterval($startIntID);

        // check if question is right or wrong
        if(Questions[$counter].correct_answer === this.value) {
          game.isRight();
        } else {
          game.isWrong();
        }

        // empty form answers after answering
        game.questionContainer.find('.Question__answers form').empty();

        // increment counter
        $counter++;


      });


    },

    isRight: function() {
      // add a message
      $message = "<p>congrats! you got it right.</p>";
      // add one to rightAnswer
      $rightAnswer++;
      // invoke transition
      this.transition($message);
    },

    isWrong: function() {
      // add a message
      $message = "<p>oooo, sorry. that was not the right answer.</p>";
      // add one to wrongAnswer
      $wrongAnswer++;
      // invoke transition
      this.transition($message);
    },

    isUnanswered: function() {
      // clear interval
      clearInterval($startIntID);

      // add a message
      $message = "<p>sorry, time's up.</p>";

      // increment unanswered questions
      $unAnswered++;

      // invoke transition
      this.transition($message);

      // increment counter
      $counter++;

      // empty form answers
      game.questionContainer.find('.Question__answers form').empty();

      // // check if last, or get next question
      // game.isLastQuestion();
    },

    transition: function($message) {
      this.messageContainer.html($message + Questions[$counter].correct_answer);
      setTimeout(function() {
        game.isLastQuestion();
      }, 1000*$transitionDelay);
    },






    isLastQuestion: function() {
      if ($counter > $totalQuestions) {
        this.gameOver();
      } else {
        this.getQuestion();
      }

    },


    gameOver: function() {
      this.messageContainer.append('<p>game over<br>');
      this.messageContainer.append('you got ' + $rightAnswer + ' answers correct.<br>');
      this.messageContainer.append('you got ' + $wrongAnswer + ' answers incorrect.<br>');
      this.messageContainer.append('you left ' + $unAnswered + ' answers blank.</p>');
      this.restartButton.removeClass('hidden').addClass('animated fadeInUp');
      this.restart();
    },

    restart: function() {
      this.restartButton.on('click', function() {
        console.log('clicked');
        $counter = 1;
        game.init();
      });
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