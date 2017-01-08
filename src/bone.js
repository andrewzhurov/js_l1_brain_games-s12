  /* eslint consistent-return: "off" */
import { ask } from './utils';

export default (rule, game) => {
  console.log('Welcome to the Brain Games, stranger!');
  const name = ask('May I have your name?');
  console.log(`${name}, we have a task for you.\n${rule}`);


  const loop = (amount) => {
    if (amount === 0) {
      console.log(`You made me proud, ${name}!`);
      return 'win';
    }
    const [question, trueAnswer] = game();
    const answer = ask(question);
    if (answer === trueAnswer) {
      console.log('Correct!');
      loop(amount - 1);
    } else {
      console.log(`Nope :( The right answer is ${trueAnswer}`);
      loop(amount);
    }
  };
  loop(3);
};
