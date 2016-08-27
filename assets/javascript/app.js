$(function() {
 
  // Questions object
  var Questions = {
    1: {
      question_text: 'Is this question one?',
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
      $totalQuestions = 0;


  // set total # of questions in var: $totalQuestions
  for(var question in Questions) {
    $totalQuestions++; // number of questions
  }






  // game object
  var game = {

    // set vars
    questionContainer: $('.Question'),
    radio: $('input[type="radio"]'),


    
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

      // check question
      this.checkQuestion();

    },


    checkQuestion: function() {
      $('input[type="radio"]').on('change', function() {

        if(Questions[$counter].correct_answer === this.value) {
          console.log('you guessed right and count is ' + $counter);
        } else {
          console.log('you guessed wrong and count is ' + $counter  );
        }



        // $question.addClass('animated fadeOut');
        // setTimeout(function() {
        //   $question.remove();
        // }, 2000);

        // increment counter
        $counter++;

        // empty form answers
        game.questionContainer.find('.Question__answers form').empty();

        // check if last, or get next question
        game.isLastQuestion();


      });


    },



    isLastQuestion: function() {
      if ($counter > $totalQuestions) {
        console.log('game over');
      } else {
        game.getQuestion();
      }

    }










  } // end game object





  game.init();











});