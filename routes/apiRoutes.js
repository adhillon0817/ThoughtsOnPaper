const fs = require('fs');
const path = require('path');
const data = require ('../db/db.json');
const {v4: uuidv4} = require('uuid');

module.exports=(app) => {
    app.get('/app/notes', (req, res) => {
        res.sendFile(path.join(_dirname, '../db/db.json'));

    });

    
}