/* eslint consistent-return: "off" */

import { ask } from './utils';

export const quizGameBone = (amount, valueFn, checkFn) => {
  const [val, nextValFn] = valueFn();
  const trueAnswer = checkFn(val);
  const answer = ask(`What about ${val} ?`);

  if (amount === 0) {
    return true;
  }

  if (answer === trueAnswer) {
    console.log('Awesome!');
    quizGameBone(amount - 1, nextValFn, checkFn);
  } else {
    console.log(`You get it wrong. The right answer is: ${trueAnswer}`);
    quizGameBone(amount, nextValFn, checkFn);
  }
};
