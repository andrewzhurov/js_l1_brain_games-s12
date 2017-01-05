import {ask} from './utils.js'
import {quizGameBone} from './games-bone'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


const welcome = () => console.log("Welcome to the Brain Games!")
const greet = name => console.log(`Hello, ${name}!`)
const rules = {"even-number": () => console.log("Answer \"yes\" if number odd otherwise answer \"no\".")}

const congrats = name => console.log(`You\'ve made it! Sincerely congrats, ${name} !`)

		
export const evenNumberGame = amount => {
	welcome()
        rules["even-number"]()

	let name = ask("May I have your name?")
	greet(name)

	let valueFn = () => getRandomInt(1, 4096)
	let checkFn = (num) => num % 2 !== 0
        let humanizedCheckFn = (num) => checkFn(num) ? "yes" : "no"
	
	quizGameBone(amount, valueFn, humanizedCheckFn)
	congrats(name)
}

