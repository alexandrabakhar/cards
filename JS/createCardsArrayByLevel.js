import { shuffleCardsArray } from './shuffleCardsArray';

export const createCardsArrayByLevel = (difficultyLevel) => {
    if (difficultyLevel === 1) {
        const cardsAmount = 3;
        const shuffledCardsArray = shuffleCardsArray(cardsAmount);
        return shuffledCardsArray;
    }
    if (difficultyLevel === 2) {
        const cardsAmount = 6;
        const shuffledCardsArray = shuffleCardsArray(cardsAmount);
        return shuffledCardsArray;
    }
    if (difficultyLevel === 3) {
        const cardsAmount = 9;
        const shuffledCardsArray = shuffleCardsArray(cardsAmount);
        return shuffledCardsArray;
    }
};
