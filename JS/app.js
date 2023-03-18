import '../styles/style.css';
// import { ALL_CARDS } from './CARDS';
import { renderDifficultyScreen } from './screens';
import { renderGameScreen } from './screens';
import { renderDifficultyHeading } from './blocks';
import { renderDifficultyLevelsRadio } from './blocks';
import { renderDifficultyBtn } from './blocks';
import { renderGameClock } from './blocks';
import { renderGameBtn } from './blocks';
import { renderCards } from './blocks';
// import { randomizer } from './randomizer';
// import { createCardsArray } from './createCardsArray';
// import { shuffleCardsArray } from './shuffleCardsArray';

// const content = document.createElement('div').classList.add('content');

window.application = {
    level: '',
    blocks: {
        'difficulty-heading': renderDifficultyHeading,
        'difficulty-levels-radio': renderDifficultyLevelsRadio,
        'difficulty-btn': renderDifficultyBtn,
        'game-clock': renderGameClock,
        'game-btn': renderGameBtn,
        cards: renderCards,
    },
    screens: {
        difficulty: renderDifficultyScreen,
        game: renderGameScreen,
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
    answer: [],
    stopInterval: function () {
        this.timers.forEach((timer) => {
            clearInterval(timer);
        });
    },
};

window.application.renderScreen('difficulty');
