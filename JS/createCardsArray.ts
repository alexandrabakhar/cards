import { ALL_CARDS } from './CARDS';
import { randomizer } from './randomizer';

export const createCardsArray = (cardsAmount: number) => {
    const cardsArray: cardsObject [] = [];
    const numbersArray: number [] = [];

    for (let i = 0; i < cardsAmount; i++) {
        const randomNumber: number = randomizer();

        if (numbersArray.includes(randomNumber)) {
            console.log('the same number');

            i = i - 1;
        } else {
            numbersArray.push(randomNumber);

            const randomCard: cardsObject = ALL_CARDS[randomNumber];
            cardsArray.push(randomCard);
            cardsArray.push(randomCard);
        }
    }

    return cardsArray;
};
