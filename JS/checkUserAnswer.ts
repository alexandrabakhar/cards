export const checkUserAnswer = (answer: string) => {
    const answersArray = window.application.answer;

    answersArray.push(answer);
    console.log(answersArray);
    const length = answersArray.length;
    if (answer !== answersArray[length - 2] && length % 2 === 0) {
        const clock = document.querySelector('.game__clock') as HTMLElement;
        const time = clock.textContent;
        window.application.gameTime = time;
        window.application.answer = [];
        window.application.stopInterval();
        window.application.renderScreen('loose');

        return;
    }
    const level = window.application.level;

    if (length === level * 6) {
        const clock = document.querySelector('.game__clock') as HTMLElement;
        const time = clock.textContent;
        window.application.gameTime = time;
        window.application.answer = [];
        window.application.stopInterval();
        window.application.renderScreen('win');

        return;
    }
};
