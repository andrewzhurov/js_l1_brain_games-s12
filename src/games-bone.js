import {ask} from './utils.js'

export const quizGameBone = (amount, valueFn, checkFn) => {
	let val = valueFn()
	let trueAnswer = checkFn(val)
	
	let answer = ask(`What about ${val} ?`)	

	// FIXME please
	let printAndLoop= (msg, am, vf, pf) => {
			console.log(msg)
			quizGameBone(am, vf, pf)}
	
	amount == 0 ?	
			true
			:
			answer == trueAnswer ?
					printAndLoop("Awesome!", amount-1, valueFn, checkFn)
					:
					printAndLoop(`You get it wrong. The right answer is: ${trueAnswer}`, amount, valueFn, checkFn) 
			
}
	
