    //Script to change the color of the question depending of the given anwser
    addEventListener('submit', function (event) {
        event.preventDefault();

        //Select and verify answer
        const selectedAnswers = Array.from(document.querySelectorAll('.answer:checked')).map(input => input.value);
        const isCorrect = selectedAnswers.every((value) => value === 'true');
    
        //Show the alert box depending of the anwser
        document.getElementById('alert').style.display = (isCorrect) ? 'block': 'none';

        //Change the color of the question depending of the anwser
        const questionItems = document.querySelectorAll('.question-item');
        questionItems.forEach((question, index) => {
            question.style.color = (selectedAnswers[index]) === 'true' ? 'green' : 'red';
        });
    });