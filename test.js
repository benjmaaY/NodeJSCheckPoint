const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');

var argv = yargs.argv;
//console.log(argv);

var command = process.argv[2];
//console.log("Command :", command);

const Options = 'Options:';
const help = '  options =>                                                        show options'
const title = '  --title =>                                                        set title'
const body = '  --body =>                                                         set body'
if (command === 'add'){
    var note = notes.addNotes(argv.title, argv.body);
    if (note) {
        console.log('note successfully created');
        console.log('*-------*');
        console.log('title: ' + argv.title + ' body: ' + argv.body);
    } else  {
        console.log("title is already used :(");
    }
}else if (command === 'remove'){
    var noteRemoved = notes.removeNotes(argv.title);
    var message = noteRemoved ? 'Note removed' : 'Note not found -_-';
    console.log(message);
}else if (command === 'read'){
    var note = notes.readNotes(argv.title);
    if(note){
        console.log("note found!");
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
}else if (command === 'list'){

    var allNotes = notes.getAll();
    var number = allNotes.length;
    //var length = console.log(number);
    console.log('Printing ' + number + ' note(s)...');
    //console.log(allNotes);
    allNotes.forEach((note) => {
        notes.logNote(note);
    });
}else if (command === 'options') {
    console.log('Options availble;');
    console.log(help);
    console.log(title);
    console.log(body);
}else {
    console.log('Invalid command');
    console.log('---------------');
    console.log('Options availble;');
    console.log(help);
    console.log(title);
    console.log(body);
}