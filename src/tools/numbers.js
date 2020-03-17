const getRandomNumber = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const isEvenNumber = (num) => (
  num % 2 === 0 ? 'yes' : 'no'
);

export {
  getRandomNumber,
  isEvenNumber,
};
