const getRandomNumber = (min, max) => {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const isEvenNumber = (num) => (
  num % 2 === 0 ? 'yes' : 'no'
);

const getRandomOperator = () => {
  const operators = ['*', '+', '-'];
  const length = operators.length - 1;
  return operators[getRandomNumber(0, length)];
};

export {
  getRandomNumber,
  isEvenNumber,
  getRandomOperator,
};
