// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')


console.log(process.argv)
const command = process.argv[2] //argument vector, all the arguments in the node process

if (command === 'add'){
    console.log('Adding note')
} else if(command === 'remove'){
    console.log('Removing note')
}




// --------------------------------- 


// const notes = getNotes()
// console.log(notes);

// console.log(chalk.bold.green.inverse('Success'))

// console.log(validator.isURL('https://deckandweb.com'))
// console.log(validator.isEmail('vishal@js.com'));

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)


// const fname = require('./utils.js')
// console.log(fname)
