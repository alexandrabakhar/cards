export const randomizer = (): number => {
    const randomNumber: number = Math.floor(Math.random() * 36 + 1);

    return randomNumber;
};
