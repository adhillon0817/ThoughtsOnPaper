const express = require('express');
const data = require ('../db/db.json');
const PORT = 3001;
const app = express();

app.get('/', (req, res) => res.send(''));

app.listen(PORT, () =>
    console.log('')
);