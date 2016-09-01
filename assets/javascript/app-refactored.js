  // Questions object
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
      explanation: 'The band was originally formed to fill an empty space on a bill at the first UK based "international punk rock festival". This show was organised by Malcolm McLaren at the 100 Club in London\'s Oxford Street on September 20th, 1976.'
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
  var total =0;
  // set total # of questions in var: $totalQuestions
  for(var q in Questions) {
    total++; // number of questions
  }



(function() {


  var game = {
    questions: Questions,
    counter: 0,
    allottedTime: 15,
    timerCount: 0,
    startIntID: '',
    rightAnswer: 0,
    wrongAnswer: 0,
    unAnswered: 0,
    message: '',
    transitionDelay: 10,
    totalQuestions: total,



    template: function(question) {
      return '<div class="Question__timer">Time remaining: <span class="timer">' + this.allottedTime + '</span></div>' +
          '<h3 class="Question__text animated fadeInRight">' + this.questions[this.counter].question_text + '</h3>' +
          '<div class="Question__answers animated fadeInLeft">' +
            '<form action="">' +
              '<label class="radio">' +
                '<input type="radio" name="question_' + this.counter + '" value="' + this.questions[this.counter].answer_one + '">' +
                  '<span class="radio__label">' + this.questions[this.counter].answer_one + '</span>' +
              '</label>' +
              '<label class="radio">' +
                '<input type="radio" name="question_' + this.counter + '" value="' + this.questions[this.counter].answer_two + '">' +
                  '<span class="radio__label">' + this.questions[this.counter].answer_two + '</span>' +
              '</label>' +
              '<label class="radio">' +
                '<input type="radio" name="question_' + this.counter + '" value="' + this.questions[this.counter].answer_three + '">' +
                  '<span class="radio__label">' + this.questions[this.counter].answer_three + '</span>' +
              '</label>' +
              '<label class="radio">' +
                '<input type="radio" name="question_' + this.counter + '" value="' + this.questions[this.counter].answer_four + '">' +
                  '<span class="radio__label">' + this.questions[this.counter].answer_four + '</span>' +
              '</label>' +
            '</form>' +
          '</div>' +
          '<div class="Question__message animated"></div>';
    },


    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
    },

    cacheDom: function() {
      this.$questionContainer = $('.Question');
      this.$questionText      = $('.Question__text');
      this.$messageContainer  = $('.Question__message');
      this.$questionForm      = $('.Question__answers form');
      this.$radio             = $('input[type="radio"]');
      this.$timerContainer    = $('.Question__timer');
      this.$timer             = $('.timer');
      this.$restartButton     = $('.Restart__button');
      this.$startButton       = $('.Start__button');
      this.$soundWarning      = $('.Warning');
      this.$sound             = $('.Game__sound');
    },
    bindEvents: function() {
      this.$startButton.on('click', this.preStart.bind(this));
      this.$questionContainer.on('change', 'input[type="radio"]', this.checkQuestion);
      this.$restartButton.on('click', this.reStart.bind(this));
    },
    render: function() {

      // render question
      if( this.counter > 0 )
        this.$questionContainer.html(this.template(this.questions[this.counter]));
      if( this.counter === 1)
        this.$questionContainer.prepend(this.$soundWarning);
    },
    preStart: function() {
      this.$startButton.removeClass('fadeInDown').addClass('fadeOutUp');
      this.$questionText.addClass('animated fadeOutDown');
      setTimeout(this.startGame.bind(this), 1000)  ;
    },
    startGame: function() {
      if ( this.$soundWarning ) {
        this.$soundWarning.addClass('hinge');
      }
      this.soundControls();
      // display sound controls
      $('.Game__sound--button').addClass('animated fadeInUp');
      this.counter = 1;
      this.startTimer();
      this.render();
    },
    soundControls: function() {
      document.querySelector('.Game__sound').play();
      // document.querySelector('.Game__sound--pause')
    },
    timer: function() {
      this.timerCount++;
      this.$questionContainer.find('.timer').html(this.allottedTime - this.timerCount);
      if(this.timerCount === this.allottedTime) {
        this.isUnanswered();
        this.stopTimer();
      }
    },
    startTimer: function() {
      this.timerCount = 0;
      this.startIntID = setInterval(this.timer.bind(this), 1000);
    },
    stopTimer: function() {
      clearInterval(this.startIntID);
    },
    checkQuestion: function() {
        game.stopTimer();
        // check answer
        if(game.questions[game.counter].correct_answer === this.value) {
          game.isRight();
        } else {
          game.isWrong();
        }
        // increment counter
        game.counter++;
    },
    isRight: function() {
      // add a message
      this.message = '<p><span class="Highlight--pink">congrats! you got it right.</span></p>' +
                 '<p><span class="Highlight">The correct answer is ' + this.questions[this.counter].correct_answer + '</span></p>' +
                 '<p><span class="Highlight--dark">' + this.questions[this.counter].explanation + '</span></p>';

      // add one to rightAnswer
      this.rightAnswer++;
      // invoke transition
      this.transition(this.message);
    },
    isWrong: function() {
      // add a message
      this.message = '<p><span class="Highlight--pink">oooo, sorry. that was not the right answer.</span></p>' +
                 '<p><span class="Highlight">The correct answer is ' + this.questions[this.counter].correct_answer + '</span></p>' +
                 '<p><span class="Highlight--dark">' + this.questions[this.counter].explanation + '</span></p>';
      // add one to wrongAnswer
      this.wrongAnswer++;
      // invoke transition
      this.transition(this.message);
    },
    isUnanswered: function() {
      // add a message
      this.message = '<p><span class="Highlight--pink">sorry, time\'s up.</span></p>' +
                 '<p><span class="Highlight">The correct answer is ' + this.questions[this.counter].correct_answer + '</span></p>' +
                 '<p><span class="Highlight--dark">' + this.questions[this.counter].explanation + '</span></p>';
      // add one to wrongAnswer
      this.unAnswered++;
      // need to increment counter if unanswered
      this.counter++;
      // invoke transition
      this.transition(this.message);
    },
    isLastQuestion: function() {
      if( this.counter > this.totalQuestions ) {
        this.gameOver();
        return true;

      }
    },


    transition: function(message) {
      this.$questionContainer.find('.Question__message').html(message);
      this.$questionContainer.find('.Question__message').addClass('shoe fadeInUp');
      this.$questionContainer.find('.Question__text').removeClass('fadeInRight').addClass('fadeOutLeft');
      this.$questionContainer.find('.Question__answers').removeClass('fadeInLeft').addClass('fadeOutRight');
      this.$messageContainer.html(this.message).addClass('show fadeInUp');
      setTimeout(function() {
        if( game.isLastQuestion() ) return;
        game.startTimer();
        game.render();
      }, 1000 * this.transitionDelay);
    },

    gameOver: function() {
      this.$questionContainer.find('.Question__message').append('<div class="Game__stats"><h3 class="animated fadeInDown"><span class="Highlight--pink">game over</span></h3>' +
                                                                '<p class="animated fadeInUp"><span class="Highlight">you got ' + this.rightAnswer + ' answers correct.</span><br>' +
                                                                '<span class="Highlight">you got ' + this.wrongAnswer + ' answers incorrect.</span><br>' +
                                                                '<span class="Highlight">you left ' + this.unAnswered + ' answers blank.</span></p></div>');
      this.$restartButton.removeClass('hidden').addClass('fadeInUp');
      return;
    },

    reStart: function() {
      this.$restartButton.addClass('hidden').removeClass('fadeInUp');
      this.rightAnswer = 0,
      this.wrongAnswer = 0,
      this.unAnswered = 0,
      this.startGame();
    }

  }


  game.init();

})()