import { createCardsArray } from './createCardsArray';

export const shuffleCardsArray = (cardsAmount) => {
    const unshuffledArray = createCardsArray(cardsAmount);

    let shuffledArray = unshuffledArray
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffledArray;
};
