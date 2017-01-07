// @flow
import { ask, randomPair } from './utils';
import { randomQuizBone } from './games-bone';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const welcome = () => console.log('Welcome to the Brain Games!');
const askName = () => ask('May I have your name?');
const greet = name => console.log(`Hello, ${name}!`);
const rules =
  { 'even-number': () => console.log('Answer \'yes\' if number odd otherwise answer \'no\'.'),
    calc: () => console.log('The rules are simple...'),
  };

const congrats = name => console.log(`You've made it! Sincerely congrats, ${name} !`);

export const evenNumberGame = (amount: number) => {
  welcome();
  rules['even-number']();

  const name = askName();
  greet(name);

  const randomDataFn = () => getRandomInt(1, 4096);
  const represent = num => String(num);
  const answerFn = num => num % 2 !== 0 ? 'yes' : 'no';

  randomQuizBone(amount, randomDataFn, represent, answerFn);
  congrats(name);
};

const signs =
  { '+': (f, s) => f + s,
    '-': (f, s) => f - s,
    '*': (f, s) => f * s,
    '/': (f, s) => f / s,
  };
export const calcGame = (amount: number) => {
  welcome();
  rules.calc();

  const name = askName();
  greet(name);

  const randomDataFn = () => [getRandomInt(1, 4096), randomPair(signs), getRandomInt(1, 4096)];
  const represent = data => `${data[0]} ${data[1][0]} ${data[2]}`;
  const answerFn = data => String(data[1][1](data[0], data[2]));

  randomQuizBone(amount, randomDataFn, represent, answerFn);
  congrats(name);
};
