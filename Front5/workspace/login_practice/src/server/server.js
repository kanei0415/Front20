const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get('/api/member', (req, res) => {
    db.query("SELECT * FROM member", (err, data) => {
        if(!err) res.send({ member_res : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})