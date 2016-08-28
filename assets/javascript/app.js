$(function() {
 
  // Questions object
  // questions taken from: http://123facts.com/play-quiz/The-History-of-Punk-Rock-731.html
  var Questions = {
    1: {
      question_text: 'What late 70\'s NYC punk band was Buster Poindexter a member of?',
      answer_one: 'The New York Dolls',
      answer_two: 'The Damned ',
      answer_three: 'The Ramones ',
      answer_four: 'Fear',
      correct_answer: 'The New York Dolls',
      explanation: 'David Johansen is Buster\'s real name and he was one of the original dress-wearing punks in the New York Dolls.'
    },
    2: {
      question_text: 'Which of these are bands that Glen Danzig has been a member of?',
      answer_one: 'Danzig, The Misfits and Black Flag',
      answer_two: 'Danzig, The Sex Pistols and Devo',
      answer_three: 'Danzig, The Misfits and Samhain',
      answer_four: 'Danzig, Agnostic Front and the Misfits',
      correct_answer: 'Danzig, The Misfits and Samhain',
      explanation: 'Glen Danzig was the original founder of the Misfits, then in the mid 80\'s formed Samhain, before going solo with Danzig.'
    },
    3: {
      question_text: 'What 70\'s punk icon played drums with Siouxsie and The Banshees at their first show?',
      answer_one: 'Johnny Rotten',
      answer_two: 'Sid Vicious',
      answer_three: 'Iggy Pop',
      answer_four: 'Filthy Animal',
      correct_answer: 'Sid Vicious',
      explanation: 'The band was originally formed to fill an empty space on a bill at the first UK based "international punk rock festival". This show was organised by Malcolm McLaren at the 100 Club in London\'s Oxford Street on September 20th, 1976. The initial line up consisted of \'Bromley Contingent\' members Siouxsie Sioux (real name Susan Janet Ballion), Steven Severin (real name Steven Bailey aka Steve Spunker/Havoc), Marco Pirroni (later of Adam and the Ants and Rema Rema) and Sid Vicious (real name John Simon Ritchie), later of the Sex Pistols, on drums. On this occasion their set consisted of a lengthy and chaotic unrehearsed improvisation of "The Lord\'s Prayer", which also included lines from songs like "Knockin\' On Heaven\'s Door", "Smoke On The Water" and "Twist and Shout".'
    },
    4: {
      question_text: 'What do the letters stand for, in the name of punk rock band, JFA?',
      answer_one: 'Jolly Fatmen of America',
      answer_two: 'Jump For Algorithms',
      answer_three: 'Johnny Fought America',
      answer_four: 'Jodie Foster\'s Army',
      correct_answer: 'Jodie Foster\'s Army',
      explanation: 'After Hinckley shot President Reagan, JFA was formed by Brian Brannon (vocals), Don "Redondo" Pendleton (guitar), Michael Cornelius (bass), and Bam-Bam (drums). John Hinckley shot Reagan after watching Taxi Driver with Robert DeNiro and Jodie Foster and said he did it for Jodie.'
    },
    5: {
      question_text: 'After the break up of the Sex Pistols, what band did John Lydon (aka Johnny Rotten) go on to form?',
      answer_one: 'General Public',
      answer_two: 'Public Image Ltd.',
      answer_three: 'None, he went solo',
      answer_four: 'They Might Be Giants',
      correct_answer: 'Public Image Ltd.',
      explanation: 'Public Image Ltd (PiL) is a band formed in 1978 by John Lydon, formerly and later Johnny Rotten of the Sex Pistols.'
    },
    6: {
      question_text: 'Erick Purkhiser, lead singer of The Cramps, is known as what?',
      answer_one: 'Lux Interior',
      answer_two: 'Filthy Animal',
      answer_three: 'Lee Ving',
      answer_four: 'Eerie Vaughn',
      correct_answer: 'Lux Interior',
      explanation: 'Eerie Vaughn was from Samhain, Lee Ving was from Fear and Filthy Animal was the drummer for Motorhead.'
    },
    7: {
      question_text: 'What member of hardcore punk band, Minor Threat went on to form Fugazi?',
      answer_one: 'Mike Watt',
      answer_two: 'Brian Baker',
      answer_three: 'Greg Ginn',
      answer_four: 'Ian Mackaye',
      correct_answer: 'Ian Mackaye',
      explanation: 'While Brian Baker was also in Minor Threat, he actually went on to form Dagnasty. The Fugazi name alludes to a Vietnam-era GI slang backronym for a particularly bad combat situation.'
    },
    8: {
      question_text: 'What band was Eric Reed Boucher, better known as Jello Biaffara, the lead singer of?',
      answer_one: 'The Sex Pistols',
      answer_two: 'Dead Kennedys',
      answer_three: 'The Jam',
      answer_four: 'Agnostic Front',
      correct_answer: 'Dead Kennedys',
      explanation: 'In the wake of the band\'s disbandment, he has become a solo musician and spoken word artist. In his political life, he is an active member of the Green Party and has participated in activism relating to his progressive political beliefs.'
    },
    9: {
      question_text: 'What New York City club, founded in 1973 by Hilly Kristal, was the place to see most punk bands that came through the city?',
      answer_one: 'CBGB',
      answer_two: 'The Whiskey-A-Go-Go',
      answer_three: 'The Electric Banana',
      answer_four: 'The Palladium',
      correct_answer: 'CBGB',
      explanation: 'The full name is CBGB & OMFUG which stands for "Country, Bluegrass, and Blues and Other Music For Uplifting Gormandizers".'
    },
    10: {
      question_text: 'What is the name of the punk dance with influences from mosh dancing, that when done correctly, resembles running and stumbling at the same time?',
      answer_one: 'Pogo',
      answer_two: 'Skank',
      answer_three: 'Breakcore',
      answer_four: 'Slam',
      correct_answer: 'Skank',
      explanation: 'Skanking is performed in a large circle at concerts, usually rotating one way or another around an axis. These circles are called "ska pits", not unlike moshpits.'
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
      $message = '<p>congrats! you got it right.</p> <p>' + Questions[$counter].explanation + '</p>';

      // add one to rightAnswer
      $rightAnswer++;
      // invoke transition
      this.transition($message);
    },

    isWrong: function() {
      // add a message
      $message = '<p>oooo, sorry. that was not the right answer.</p> <p>' + Questions[$counter].explanation + '</p>';
      // add one to wrongAnswer
      $wrongAnswer++;
      // invoke transition
      this.transition($message);
    },

    isUnanswered: function() {
      // clear interval
      clearInterval($startIntID);

      // add a message
      $message = '<p>sorry, time\'s up.</p> <p>' + Questions[$counter].explanation + '</p>';

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