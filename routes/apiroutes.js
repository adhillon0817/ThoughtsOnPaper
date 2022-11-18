const router = require('express').Router();
const { notStrictEqual } = require('assert');
const { fstat } = require('fs');
const path = require('path');

app.get('/api/notes',(req,res) => {
    const noteId = req.params.note_id
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

app.post('/', (req,res) => {
    console.log(req.body) {
        const newNote = {
            title,
            text,
        };
        notes.push(newNote);
    }

    const noteString = JSON.stringify(notes);

    fs.writeFile(`./db/db.json`, noteString, (err) => {
        err
        ? console.error(err)
        : console.log(
            'New note!'
        )
    }
    );

})