const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List out a note',
    handler: function(){
        console.log('Listing out all note')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading the note')
    }
})

yargs.parse()

// console.log(yargs.argv)







// --------------------------------- 

// const command = process.argv[2] //argument vector, all the arguments in the node process
// if (command === 'add'){
//     console.log('Adding note')
// } else if(command === 'remove'){
//     console.log('Removing note')
// }

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
