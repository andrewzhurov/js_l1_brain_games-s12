  /* eslint consistent-return: "off" */

import { ask } from './utils';

export const randomQuizBone = (amount: number, randomDataFn, represent, answerFn) => {
  const data = randomDataFn();
  const trueAnswer = answerFn(data);
  const answer = ask(`What about ${represent(data)} ?`);

  if (amount === 0) {
    return true;
  }

  if (answer === trueAnswer) {
    console.log('Awesome!');
    randomQuizBone(amount - 1, randomDataFn, represent, answerFn);
  } else {
    console.log(`You get it wrong. The right answer is: ${trueAnswer}`);
    randomQuizBone(amount, randomDataFn, represent, answerFn);
  }
};
