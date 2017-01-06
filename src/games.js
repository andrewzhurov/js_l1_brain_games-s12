import { ask } from './utils';
import { quizGameBone } from './games-bone';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const welcome = () => console.log('Welcome to the Brain Games!');
const greet = name => console.log(`Hello, ${name}!`);
const rules = { 'even-number': () => console.log('Answer \'yes\' if number odd otherwise answer \'no\'.') };

const congrats = name => console.log(`You've made it! Sincerely congrats, ${name} !`);

export const evenNumberGame = (amount) => {
  welcome();
  rules['even-number']();

  const name = ask('May I have your name?');
  greet(name);

  const valueFn = () => [getRandomInt(1, 4096), valueFn];
  const checkFn = num => num % 2 !== 0 ? 'yes' : 'no';

  quizGameBone(amount, valueFn, checkFn);
  congrats(name);
};
