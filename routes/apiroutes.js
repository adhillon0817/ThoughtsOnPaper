const router = require("express").Router();
const { response } = require("express");
const path = require("path");
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");


//GET /api/notes should read the db.json file (day 1?)

   //res.json()
router.get("/notes", (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse
    (data)));
});
//POST/api/notes should recieve a new note to save on the request body, add it to the db.json file (day 2)

router.post("/notes", (req, res) => {
    console.info(`${req.method} received`);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
        };


readAndAppend(newNote, "./db/db.json");
res.status(200).json("added new note!");
    }else {
        res.status(500).json("Error");

    }
});



module.exports = router;

//     notes.push(newNote);

//     const noteString = JSON.stringify(notes);

//     //fs.writeFile 

//     fs.write(`./db/db.json`, noteString, (err) => {
//         err
//         ? console.error(err)
//         : console.log(
//             `New note written`
//         )

//     });

//     const response = {
//         status: 'Done',
//         body: newNote,
//     };

//     console.log(response);
//     res.status(201).json(response);
// } else{
//     res.status(500).json('Error')

// }

// });

// Return the new note to the client 

