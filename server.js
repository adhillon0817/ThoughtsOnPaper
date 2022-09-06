// Require Express
const express = require("express");


// Require the 'db.json' file and store in 'notes'


// Use Express to intialize the 'app' server
const app = express();

// GET /notes should return the notes.html file


// GET /api/notes should read the db.json file

    // res.json()

// `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you) and return new note to client.

    // fs.writeFile


// GET * should return the index.html file.


// Use the 'app' to 'listen' to specific 'PORT'

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Note App listening at http://localhost:${PORT}`)
);