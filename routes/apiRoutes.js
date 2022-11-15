const fs = require('fs');
const path = require('path');
const data = require ('../db/db.json');
const {v4: uuidv4} = require('uuid');

const app = router("express").Router();


module.exports=(app) => {
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(_dirname, '../db/db.json'));
    });

    router.post('/notes', (req,res) => {
        let db = fs.readFileSync('./db/db.json');
        
        res.json(db);

        if (req.body){
            const notes ={
                id: uuidv4(),
                title: req.body.title,
                text: req.body.text
            };
            readAndAppend(db, './db/db.json');
            res.send('db added')
        }
    });



}

router.delete('./api')