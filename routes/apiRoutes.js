const fs = require('fs');
const path = require('path');
const data = require ('../db/db.json');
const {v4: uuidv4} = require('uuid');

const {
    readFromFile,
    readAndAppend,
    writeToFile,
  } = require('../helpers/fsUtils');
  

const app = router("express").Router();


module.exports=(app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(_dirname, '../db/db.json'));
    });

    app.post('/notes', (req,res) => {
        let db = fs.readFileSync('./db/db.json');
        
        res.json(db);

        if (req.body){
            const notes ={
                id: uuidv4(),
                title: req.body.title,
                text: req.body.text
            };
        }
    });

    app.get('/notes', (req,res) => {
        
    })

}

router.delete('./api')