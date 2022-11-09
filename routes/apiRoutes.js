const express = require('express');
const fs = require('fs');
const path = require('path');
const data = require ('../db/db.json');
const {v4: uuidv4} = require('uuid');

const app = express()

app.use(express.Router());

module.exports=(app) => {
    app.get('/app/notes', (req, res) => {
        res.sendFile(path.join(_dirname, '../db/db.json'));
    });

    app.post('api/notes', (req,res) => {
        let db = fs.readFileSync('./db/db.json');
        res.json(db);

        if (req.body){
            const notes ={
                id: uuidv4(),
                title: req.body.title,
                text: req.body.text
            };
        }
    })
}

app.delete('./api')