/* eslint no-else-return: "off", */
import { rand } from '../utils';

// I know, nobody would like to see that :/
const progression = (now, count, missedCount, step, out, missed) => {
  if (count === 0) {
    return [out, missed];
  }
  const toAdd = missedCount === 0 ? '..' : now;

  return progression(now + step, count - 1, missedCount - 1, step, `${out} ${toAdd}`, missedCount === 0 ? String(now) : missed);
};

export default () => {
  const num = rand(1, 2048);
  const step = rand(10, 1000);
  const missedCount = rand(1, 10);
  const [pr, missed] = progression(num, 10, missedCount, step, '', 'none');

  return [pr, missed];
};

