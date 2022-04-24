const fs = require ('fs')

const getNotes = () =>{
    return 'Your notes ...'
}

const addNote = function(title, body){
    const notes = loadNotes()
}

const loadNotes = () =>{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJason = dataBuffer.toString()
    return JSON.parse(dataJason)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,   
}