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

const getProgression = (num, steps, size) => {
  const coll = [];
  const iter = (counter, acc) => {
    if (counter === size) return acc;
    coll.push(acc);
    return iter(counter + 1, acc + steps);
  };
  iter(0, num);
  const progressionList = coll.join(' + ');
  return progressionList;
};

export {
  getRandomNumber,
  isEvenNumber,
  getRandomOperator,
  getGreatestDivisor,
  getProgression,
};
