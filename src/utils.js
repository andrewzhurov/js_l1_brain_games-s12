import readlineSync from 'readline-sync'

export const ask = askStr => readlineSync.question(`${askStr} \n>`)	
