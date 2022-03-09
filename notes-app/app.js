const validator = require('validator')

const getNotes = require('./notes.js')

const notes = getNotes()
console.log(notes);

console.log(validator.isURL('https://deckandweb.com'))

// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)


// const fname = require('./utils.js')
// console.log(fname)