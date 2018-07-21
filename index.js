
const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/admin', (req, res) => res.send("This is secret. Go away."));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
