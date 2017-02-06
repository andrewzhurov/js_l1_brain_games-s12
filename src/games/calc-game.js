// @flow
import { rand } from '../utils';

export default () => {
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
