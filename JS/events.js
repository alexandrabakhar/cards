export function selectGameLevel(event) {
    event.preventDefault();
    const content = document.querySelector('.content');

    const difficultyLevels = content.querySelector('.difficulty__levels');

    const selectedLevel = difficultyLevels.querySelector('input:checked');
    if (!selectedLevel) {
        console.log('Выберите уровень!');
        return;
    }
    window.application.level = selectedLevel.value;
    content.textContent = '';

    window.application.renderScreen('game');
}

