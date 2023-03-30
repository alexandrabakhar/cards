import { stopwatch } from './stopwatch';
import { selectGameLevel, showCard } from './events';
import { Modal } from './modal';

export const renderDifficultyScreen = () => {
    const content = document.querySelector('.content') as HTMLDivElement;
    content.textContent = '';
    if (content.classList.contains('game__screen')) {
        content.classList.remove('game__screen');
    }

    const form: HTMLFormElement = document.createElement('form');
    form.classList.add('block__difficulty');
    content?.appendChild(form);

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

    content?.classList.add('game__screen');

    const header = document.createElement('header');
    header.classList.add('game__header');
    content?.appendChild(header);

    window.application.renderBlock('game-clock', header);
    window.application.renderBlock('game-btn', header);

    const main = document.createElement('main');
    window.application.renderBlock('cards', main);
    content?.appendChild(main);
    const hideCards = setInterval(() => {
        const cards = Array.from(main.children);
        for (const card of cards) {
            card.classList.add('back');
        }
        console.log('5sec');
        clearInterval(hideCards);
        main.addEventListener('click', showCard);

        stopwatch();
    }, 5000);

    window.application.timers.push(hideCards);
};

export const renderWinScreen = () => {
    const modal = new Modal('win');
    modal.buildModal('Вы выиграли!');
    modal.openModal();
};

export const renderLooseScreen = () => {
    const modal = new Modal('loose');
    modal.buildModal('Вы проиграли!');
    modal.openModal();
};
