import { shuffleCardsArray } from './shuffleCardsArray';
import { cardsObject } from './abstractTypes';

export const createCardsArrayByLevel = (
    difficultyLevel: number
): cardsObject[] | undefined => {
    if (difficultyLevel === 1) {
        const cardsAmount = 3;
        const shuffledCardsArray: cardsObject[] =
            shuffleCardsArray(cardsAmount);
        return shuffledCardsArray;
    }
    if (difficultyLevel === 2) {
        const cardsAmount = 6;
        const shuffledCardsArray: cardsObject[] =
            shuffleCardsArray(cardsAmount);
        return shuffledCardsArray;
    }
    if (difficultyLevel === 3) {
        const cardsAmount = 9;
        const shuffledCardsArray: cardsObject[] =
            shuffleCardsArray(cardsAmount);
        return shuffledCardsArray;
    }
};
