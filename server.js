// Require Express and assign variables. 
const express = require("express");
const note = require('./db/db.json');
const fs = require('fs')
const path = require('path');


// const path = require('path');

const app = express();

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');

// Set up port
const PORT = process.env.PORT || 3001;




// GET /api/notes should read the db.json file

    // res.json()
// app.get('/send', (req, res) =>
// res.sendFile(path.join(__dirname, 'db/db.json'))
//   )

// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you) and return new note to client.

    // fs.writeFile

    // Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api', apiRoutes);
// app.use('/', htmlRoutes);

app.get('/api/notes', (req, res) => {
  res.status(200).json(notes);
});

app.get('/notes', (req, res) =>
res.sendFile(path.join(_direname, 'public/notes.html'))
);


app.post('/api/notes', (req, res) => {
  console.info (`${req.method} note added!`);
  

  const { title, text } = req.body;

  if(req.body){
    const dbNote = {
      title,
      text,
    };

    notes.push(dbNote);
};

const noteString = JSON.stringify(notes);

app.get('/', (req,res) {
  res.sendFile(path.join(_direname, 'public/index.html'))
});

// Use the 'app' to 'listen' to specific 'PORT'

app.listen(PORT, () =>
  console.log(`Note App listening at http://localhost:${PORT}`)
);