/* eslint no-else-return: "off" */
import { rand } from './utils';

const gcd = (d, a, b) => {
  if (a % d === 0 && b % d === 0) {
    return d;
  } else {
    return gcd(d - 1, a, b);
  }
};

export default () => {
  const a = rand(1, 2048);
  const b = rand(1, 2048);
  const d = Math.max(gcd(a, a, b), gcd(b, a, b));

  return [`GCD of ${a} and ${b}`, String(d)];
};
