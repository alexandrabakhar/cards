import '../styles/style.css';
import {
    renderDifficultyScreen,
    renderGameScreen,
    renderLooseScreen,
    renderWinScreen,
} from './screens';
import {
    renderDifficultyHeading,
    renderDifficultyLevelsRadio,
    renderDifficultyBtn,
    renderGameClock,
    renderGameBtn,
    renderCards,
} from './blocks';
import { Application } from './abstractTypes';
declare global {
    interface Window {
        application: Application;
    }
}
window.application = {
    answer: [],
    level: 0,
    gameTime: '',
    gameStatus: {},
    timers: [],
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
        win: renderWinScreen,
        loose: renderLooseScreen,
    },
    renderBlock: function (blockName: string, container: HTMLElement) {
        if (!this.blocks[blockName]) {
            console.log(`Такого поля '${blockName}' нет!`);
            return;
        }
        this.blocks[blockName](container);
    },
    renderScreen: function (screenName: string) {
        this.timers.forEach((timer: NodeJS.Timer) => {
            clearInterval(timer);
        });

        this.timers = [];

        if (!this.screens[screenName]) {
            console.log(`Такого поля '${screenName}' нет!`);
            return;
        }
        this.screens[screenName]();
    },
    stopInterval: function (): void {
        this.timers.forEach((timer: NodeJS.Timer) => {
            clearInterval(timer);
        });
    },
};

window.application.renderScreen('difficulty');
