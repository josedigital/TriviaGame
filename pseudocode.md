# steps

1. start game, init()

   - init all questions, rights, wrongs, etc.


   - choose a question and display
     - question has properties (question, answers, correct_anser)
     - questions stored as array?
     - iterate over question.length to get one by one ? 
       - Every time a question is done (timer up, answered right/wrong) you can increment a counter for your current question and check after you increment it: `if (counter == questionArray.length)` then the game ends

2. display question

   - start timer (counts down from 30s)


   - check if time < 1, out of time displayRightAnswer()
     - if last question, endGame()
     - else, get next question
   - check if answer is correct, displayCongrats()
     - if last question, endGame()
     - else, get next question
   - else, displaySorry() 
     - if last question, endGame()
     - else, get next question

3. endGame()

   - show numRight and numWrong, and unAsnwered
   - start over/reset button









counter = 0

then you invoke getQuestion()

-   question  = questions[counter]

-   counter++

-   timer()

    -   checkQuestion()

        -   checkTime()

            - display 'out of time'
            - if time < 1, display right answer 
            - getQuestion()

        -   checkAnswer()

            -   if right, rightAnswer()

                - right answer, display congrats


                - getQuestion()

            -   else wrongAnswer()

                - wrong answer, display right answer
                - getQuestion()

        -   checkIfLast()

            - endGame()
            - getQuestion()


if it's right, you transition - show right anser, sorry if wrong, congrats if right - then check if last question