import { ALL_CARDS } from './CARDS';
import { randomizer } from './randomizer';

export const createCardsArray = (cardsAmount) => {
    const cardsArray = [];
    // for (let i = 0; i < cardsAmount; i++) {
    //     const randomNumber = randomizer();
    //     const randomCard = ALL_CARDS[randomNumber];
    //     cardsArray.push(randomCard);
    //     cardsArray.push(randomCard);
    // }
    const numbersArray = [];

    for (let i = 0; i < cardsAmount; i++) {
        const randomNumber = randomizer();

        if (numbersArray.includes(randomNumber)) {
            console.log('the same number');

            i = i - 1;
        } else {
            numbersArray.push(randomNumber);

            const randomCard = ALL_CARDS[randomNumber];
            cardsArray.push(randomCard);
            cardsArray.push(randomCard);
        }
    }

    return cardsArray;
};
