// import { createCardsArrayByLevel } from './createCardsArrayByLevel';
import { checkUserAnswer } from './checkUserAnswer';
import { stopwatch } from './stopwatch';
import { selectGameLevel } from './events';

export const renderDifficultyScreen = () => {
    const content = document.querySelector('.content');

    const form = document.createElement('form');
    form.classList.add('block__difficulty');
    content.appendChild(form);

    form.addEventListener('submit', selectGameLevel);

    window.application.renderBlock('difficulty-heading', form);

    const div = document.createElement('div');
    div.classList.add('difficulty__levels');
    form.appendChild(div);

    window.application.renderBlock('difficulty-levels-radio', div);
    window.application.renderBlock('difficulty-btn', form);
};

export const renderGameScreen = () => {
    const content = document.querySelector('.content');

    content.classList.add('game__screen');

    const header = document.createElement('header');
    header.classList.add('game__header');
    content.appendChild(header);

    window.application.renderBlock('game-clock', header);
    window.application.renderBlock('game-btn', header);

    const main = document.createElement('main');
    window.application.renderBlock('cards', main);
    main.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.classList.contains('card')) {
            return;
        }
        // target.attributes.src.textContent = './static/images/back.png';
        checkUserAnswer(target.id);
        target.classList.remove('back');
    });
    content.appendChild(main);
    const hideCards = setInterval(() => {
        const cards = main.children;
        for (const card of cards) {
            card.classList.add('back');
        }
        console.log('5sec');
        clearInterval(hideCards);
        stopwatch();
    }, 5000);

    window.application.timers.push(hideCards);
};
