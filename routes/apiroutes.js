const router = require('express').Router();
const { response } = require('express');
const path = require('path');


//GET /api/notes should read the db.json file (day 1?)

   //res.json()
app.get('/api/notes', (req, res) => {
    res.status(200).json(notes);
})
//POST/api/notes should recieve a new note to save on the request body, add it to the db.json file (day 2)

app.post('/api/notes', (req, res) =>{
    console.info(`${req.method} received`);

    const {title, test} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
        };


    notes.push(newNote);

    const noteString = JSON.stringify(notes);

    //fs.writeFile 

    fs.write(`./db/db.json`, noteString, (err) => {
        err
        ? console.error(err)
        : console.log(
            `New note written`
        )

    });

    const response = {
        status: 'Done',
        body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
} else{
    res.status(500).json('Error')

}

});

// Return the new note to the client 

module.exports = router;