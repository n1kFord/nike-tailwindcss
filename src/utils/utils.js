export const generateRating = () => {
    const randomNumber = Math.floor(Math.random() * 11);

    const rating = randomNumber + 40;

    const finalRating = rating / 10;

    return finalRating;
};
