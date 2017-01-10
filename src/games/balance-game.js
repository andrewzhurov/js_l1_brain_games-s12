/* eslint no-else-return: "off", */
import { rand } from '../utils';

// It's so fucked
// And not totally copypasted from @lazycoder, nah. (it is)
const flatten = (coll) => {
  const arr = String(coll).split('').map(e => Number(e));
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  if (Math.abs(min - max) < 2) {
    return arr.sort().join('');
  }

  arr[arr.indexOf(min)] += 1;
  arr[arr.indexOf(max)] -= 1;

  return flatten(Number(arr.join('')));
};

export default () => {
  const num = rand(1, 2048);
  const flattenStr = flatten(num);

  return [String(num), flattenStr];
};

