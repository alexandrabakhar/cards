export const checkUserAnswer = (answer) => {
    const answersArray = window.application.answer;

    answersArray.push(answer);
    console.log(answersArray);
    const length = answersArray.length;
    if (answer !== answersArray[length - 2] && length % 2 === 0) {
        alert('Вы проиграли!');
        window.application.stopInterval();
        return;
    }
    const level = window.application.level;

    if (length === level * 6) {
        alert('Вы выиграли!');
        window.application.stopInterval();
        return;
    }
};
