import { checkUserAnswer } from './checkUserAnswer';
export function selectGameLevel(event: Event) {
    event.preventDefault();
    const content = document.querySelector('.content') as HTMLFormElement;

    const difficultyLevels = content.querySelector(
        '.difficulty__levels'
    ) as HTMLElement;

    const selectedLevel = difficultyLevels.querySelector(
        'input:checked'
    ) as HTMLInputElement;
    if (!selectedLevel) {
        console.log('Выберите уровень!');
        return;
    }
    window.application.level = Number(selectedLevel.value);
    content.textContent = '';

    window.application.renderScreen('game');
}

export function showCard(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.classList.contains('card')) {
        return;
    }
    checkUserAnswer(target.id);
    target.classList.remove('back');
}
