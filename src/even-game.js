// @flow
import { rand } from './utils';

export default () => {
  const num = rand(1, 4096);
  const question = `Is ${num} even?`;
  const answer = num % 2 !== 0 ? 'yes' : 'no';

  return [question, answer];
};
