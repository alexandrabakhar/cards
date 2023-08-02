import { createCardsArrayByLevel } from './createCardsArrayByLevel';

export function renderDifficultyHeading(container) {

    const heading = document.createElement('h2');
    heading.classList.add('difficulty__heading');
    heading.textContent = 'Выбери сложность';
    container.appendChild(heading);
}

export function renderDifficultyLevelsRadio(container) {

    for (let i = 1; i <= 3; i++) {
        const input = document.createElement('input');
        input.setAttribute('id', `level${i}`);
        input.setAttribute('value', `${i}`);
        input.setAttribute('name', `levels`);
        input.setAttribute('type', `radio`);
        input.classList.add('difficulty__levels-radio');
        container.appendChild(input);

        const label = document.createElement('label');
        label.setAttribute('for', `level${i}`);
        label.textContent = `${i}`;
        container.appendChild(label);
    }
}

export function renderDifficultyBtn(container) {

    const btn = document.createElement('button');
    btn.classList.add('difficulty__btn', 'btn');
    btn.textContent = 'Играть';
    container.appendChild(btn);
}

export function renderGameClock(container) {

    const box = document.createElement('div');
    box.classList.add('game__clock-container');

    const div = document.createElement('div');
    div.classList.add('game__clock-text');

    const min = document.createElement('span');
    min.textContent = 'min';

    const sek = document.createElement('span');
    sek.textContent = 'sek';
    const clock = document.createElement('h1');
    clock.textContent = '00.00';
    clock.classList.add('game__clock');

    div.appendChild(min);
    div.appendChild(sek);
    box.appendChild(div);
    box.appendChild(clock);

    container.appendChild(box);
}

export function renderGameBtn(container) {

    const btn = document.createElement('button');
    btn.classList.add('game__btn', 'btn');
    btn.textContent = 'Начать заново';
    container.appendChild(btn);
}

export function renderCards(container) {
    const cardsArray = createCardsArrayByLevel(+window.application.level);

    for (let i = 0; i < cardsArray.length; i++) {
        const card = cardsArray[i];
        const img = document.createElement('img');
        img.setAttribute('src', `${card.img}`);
        img.setAttribute('alt', `${card.name}`);
        img.setAttribute('id', `${card.name}`);
        img.classList.add('card');
        container.appendChild(img);
    }
}
