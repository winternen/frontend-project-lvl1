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

const getGreatestDivisor = (a, b) => {
  const maxInt = Math.max(a, b);
  const minInt = Math.min(a, b);
  if (maxInt % minInt === 0) return minInt;
  return getGreatestDivisor(minInt, maxInt % minInt);
};

export {
  getRandomNumber,
  isEvenNumber,
  getRandomOperator,
  getGreatestDivisor,
};
