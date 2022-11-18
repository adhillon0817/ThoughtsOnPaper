// const app = require("express").Router();
// const data = JSON.parse(fs.readFileSync("../db/db.json"));
// const fs = require("fs");


// module.exports = function(app) {
//     app.get("/api/notes", function (req,res) {
//         res.json(data);
//     });
// }

// const {v4: uuidv4} = require('uuid');

// const {
//     readFromFile,
//     readAndAppend,
//     writeToFile,
//   } = require('../helpers/uuid');
  

//     app.get('/notes', (req, res) => {
//         var d = fs.readFileAsync("./db/db.json");
//         console.log

//         readFromFile('./db/db.json').then((data) =>function(){
//             console.log("data: "+data);
//         });
//     });



//     app.post('/notes', (req,res) => {
//          console.log(req.body);
        
//         const { title, text } = req.body;

//         if (req.body){
//             const newNote ={
//                 id: uuidv4(),
//                 title,
//                 text,
//             };

//             readAndAppend(newNote, './db/db.json');
//             res.json(`Note added successfully`);
//             } else {
//                 res.error('Error in adding note.');
//             }
//     });

// module.exports = app;
