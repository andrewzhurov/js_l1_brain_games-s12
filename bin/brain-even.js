#!/usr/bin/env node
import readlineSync from 'readline-sync';
const actual = readlineSync.question('May I have your name? ')

console.log("Welcome to the Brain Games, " + actual + "!");
