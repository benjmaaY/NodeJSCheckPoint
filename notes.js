const fs = require ('fs');

var fetchNotes = () => {
    try {
        //error can happen here
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        //tackle the error
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
var addNotes = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    // fetchNotes()
    // fetchNotes()

    if (duplicateNotes.length === 0) {
        notes.push(note);
         saveNotes(notes);
         return note;
        // saveNotes()
    }
};

var removeNotes = (title) => {
    //fetch notes
    var notes = fetchNotes();
    //filter
    var filteredNotes = notes.filter((note) => {
        note.title !== title
    });
    //save new
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length
}

var readNotes = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => {
        return note.title === title;
    });
    return filteredNotes[0];
}
var logNote = (note) => {
    console.log('-----');
    console.log("Title: " + note.title + " Body: " + note.body)
};

var getAll = () => {
    return fetchNotes();
}
module.exports = {
    addNotes,
    removeNotes,
    readNotes,
    getAll,
    logNote
}