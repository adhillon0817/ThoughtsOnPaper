const app = require("express").Router();

const data = require ('../db/db.json');

const {v4: uuidv4} = require('uuid');

const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/');
  

    app.get('/notes', (req, res) => {
        res.sendFile(path.join(_dirname, '../db/db.json'));
    });



    app.post('/notes', (req,res) => {
         console.log(req.body);
        
        const { title, text } = req.body;

        if (req.body){
            const newNote ={
                id: uuidv4(),
                title,
                text,
            };

            readAndAppend(newNote, './db/db.json');
            res.json(`Note added successfully`);
            } else {
                res.error('Error in adding note.');
            }
    });

module.exports = app;
