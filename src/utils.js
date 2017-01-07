/* eslint no-bitwise: "off" */
import readlineSync from 'readline-sync';

export const ask = askStr => readlineSync.question(`${askStr} \n>`);
export const randomPair = (obj) => {
  const keys = Object.keys(obj);
  const key = keys[keys.length * Math.random() << 0];
  const val = obj[key];
  return [key, val];
};
