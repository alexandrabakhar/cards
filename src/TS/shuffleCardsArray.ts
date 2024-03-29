import { createCardsArray } from './createCardsArray';
import { cardsObject } from './abstractTypes';

export const shuffleCardsArray = (cardsAmount: number): cardsObject[] => {
    const unshuffledArray: cardsObject[] = createCardsArray(cardsAmount);

    const shuffledArray: cardsObject[] = unshuffledArray
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffledArray;
};
