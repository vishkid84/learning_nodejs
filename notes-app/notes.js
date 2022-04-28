const fs = require ('fs')
const chalk = require('chalk')

const getNotes = () =>{
    return 'Your notes ...'
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('Note title taken')
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const keepNotes = notes.filter(function(note){
        return note.title !== title
    })
    
    if(notes.length > keepNotes.length){
        console.log(chalk.bold.green('Note removed'))
        saveNotes(keepNotes)
    }else{
        console.log(chalk.bold.red('No note found'))
    }
    
}

const saveNotes = function(notes){
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJason = dataBuffer.toString()
        return JSON.parse(dataJason)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,   
    removeNote: removeNote,
}



// const removeNote = function(title) {
 
//     // load notes array
//     const notes = loadNotes()
//     // get index of note with specified title
//     const index = notes.findIndex(note => note.title === title )
 
//     // remove note from notes array using splice if it exists, else return an error
//     if (index > -1) {
 
//         notes.splice(index,1)
 
//         saveNotes(notes)
    
//         console.log(chalk`{green Title: \'${title}\' has been removed}`)
//     } else {
 
//         console.log(chalk.red("No such note exists"))
 
//     }
 
// }