// Require Express and assign variables. 
const express = require("express");
const path = require('path');
//Helpers method for generating unique ids
const uuid = require('./helpers/uuid');
const note = require('./db/db.json');
const fs = require('fs')


const PORT = process.env.PORT || 3001;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/api/notes', (req, res) => {
  res.status(200).json(note);
});

app.get('/notes', (req, res) =>
res.sendFile(path.join(_direname, 'public/notes.html'))
);


app.post('/api/note', (req, res) => {
  console.info (`${req.method} note added!`);
  

  const { title, text } = req.body;

  if(req.body){
    const newNote = {
      title,
      text,
    };

    note.push(newNote);

const textString = JSON.stringify(note);

fs.writeFile(`./db/db.json`, textString, (err) =>

err 
? console.error(err)
: console.log(
  `new note`
)
);

const response = {
  status: 'successful',
  body: newNote,
};

console.log(response);
res.status(201).json(response);
} else{
  res.status(500).json('Post not added');
}

});

app.get('/', (req,res) {
  res.sendFile(path.join(_direname, 'public/index.html'))
});

// Use the 'app' to 'listen' to specific 'PORT'

app.listen(PORT, () =>
  console.log(`Note App listening at http://localhost:${PORT}`)
);