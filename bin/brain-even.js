#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const ask = askStr => readlineSync.question(`${askStr} \n>`)	

const welcome = () => console.log("Welcome to the Brain Games!")
const greet = name => console.log(`Hello, ${name}!`)
const showRules = () => console.log("Answer \"yes\" if number odd otherwise answer \"no\".")
const congrats = name => console.log(`You've made it! Sincerely congrats, ${name} !`)

const Boolgame = (amount, valueFn, predicateFn) => {
	let val = valueFn()
	let trueAnswer = predicateFn(val)
	let humanizedAnswer = trueAnswer ? "yes" : "no"
	

	let answer = ask(`What about ${val} ?`)	

	// FIXME please
	let printAndLoop= (msg, am, vf, pf) => {
			console.log(msg)
			Boolgame(am, vf, pf)}
			
					
	
	// LOOKSCOOL hah? (sarcastic)
	amount == 0 ?	
			true
			:
			answer == humanizedAnswer ?
					printAndLoop("Awesome!", amount-1, valueFn, predicateFn)
					:
					printAndLoop(`You get it wrong. The right answer is: ${humanizedAnswer}`, amount, valueFn, predicateFn) 
			
}
			
const evenNumberPlay = amount => {
	welcome()
	showRules()

	let name = ask("May I have your name?")
	greet(name)

	let valueFn = () => getRandomInt(1, 4096)
	let predicateFn = (num) => num % 2 !== 0
	
	Boolgame(amount, valueFn, predicateFn)
	congrats(name)
	
}

evenNumberPlay(3)
