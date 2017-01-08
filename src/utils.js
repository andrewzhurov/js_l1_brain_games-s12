/* eslint no-bitwise: "off" */
import readlineSync from 'readline-sync';

export const ask = askStr => readlineSync.question(`${askStr} \n>`);

export const rand = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
