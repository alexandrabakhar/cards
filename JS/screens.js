const content = document.querySelector('.content');

function renderDifficultyScreen() {

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
}


function renderGameScreen() {

    content.classList.add('game__screen');

    const header = document.createElement('header');
    header.classList.add('game__header')
    content.appendChild(header);

    window.application.renderBlock('game-clock', header);
    window.application.renderBlock('game-btn', header);

    const main = document.createElement('main');
    content.appendChild(main);

}