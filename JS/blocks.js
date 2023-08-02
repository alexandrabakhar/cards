function renderDifficultyHeading(container) {
    const heading = document.createElement('h2');
    heading.classList.add('difficulty__heading');
    heading.textContent = 'Выбери сложность';
    container.appendChild(heading);
}

function renderDifficultyLevelsRadio(container) {
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

function renderDifficultyBtn(container) {
    const btn = document.createElement('button');
    btn.classList.add('difficulty__btn', 'btn');
    btn.textContent = 'Играть';
    container.appendChild(btn);
}

function renderGameClock(container) {
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

function renderGameBtn(container) {
    const btn = document.createElement('button');
    btn.classList.add('game__btn', 'btn');
    btn.textContent = 'Начать заново';
    container.appendChild(btn);
}

window.application = {
    level: '',
    blocks: {
        'difficulty-heading': renderDifficultyHeading,
        'difficulty-levels-radio': renderDifficultyLevelsRadio,
        'difficulty-btn': renderDifficultyBtn,
        'game-clock': renderGameClock,
        'game-btn': renderGameBtn,
    },
    screens: {
        difficulty: function renderDifficultyScreen() {
            const content = document.querySelector('.content');

            const form = document.createElement('form');
            form.classList.add('block__difficulty');
            content.appendChild(form);

            // form.addEventListener('submit', selectGameLevel);

            window.application.renderBlock('difficulty-heading', form);

            const div = document.createElement('div');
            div.classList.add('difficulty__levels');
            form.appendChild(div);

            window.application.renderBlock('difficulty-levels-radio', div);
            window.application.renderBlock('difficulty-btn', form);
        },
        game: function renderGameScreen() {
            const content = document.querySelector('.content');

            content.classList.add('game__screen');

            const header = document.createElement('header');
            header.classList.add('game__header');
            content.appendChild(header);

            window.application.renderBlock('game-clock', header);
            window.application.renderBlock('game-btn', header);

            const main = document.createElement('main');
            content.appendChild(main);
            // window.application.screens['game']['renderGameScreen'];
        },
    },
    renderScreen: function (screenName) {
        this.timers.forEach((timer) => {
            clearInterval(timer);
        });

        this.timers = [];

        if (!this.screens[screenName]) {
            console.log(`Такого поля '${screenName}' нет!`);
            return;
        }
        this.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        if (!this.blocks[blockName]) {
            console.log(`Такого поля '${blockName}' нет!`);
            return;
        }
        this.blocks[blockName](container);
    },
    timers: [],
};

window.application.renderScreen('game');