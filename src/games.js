// @flow
import { rand } from './utils';

export const evenGame = () => {
  const num = rand(1, 4096);
  const question = `Is ${num} even?`;
  const answer = num % 2 !== 0 ? 'yes' : 'no';

  return [question, answer];
};

export const calcGame = () => {
  const a = rand(1, 200);
  const b = rand(1, 200);
  switch (rand(0, 2)) {
    case 0:
      return [`${a} + ${b}`, String(a + b)];
    case 1:
      return [`${a} - ${b}`, String(a - b)];
    case 2:
      return [`${a} * ${b}`, String(a * b)];
    default:
      return [`${a} + ${b}`, String(a + b)];
  }
};
