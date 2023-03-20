export const randomizer = (): number => {
    const randomNumber: number = Math.round(Math.random() * 35 + 1);
    return randomNumber;
};
