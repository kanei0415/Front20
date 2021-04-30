const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');

app.get('/api/person', (req, res) => {
    db.query("SELECT * FROM person", (err, data) => {
        if(!err) res.send({ person_res : data });
        else res.send(err);
    })
})

app.delete('/api/del_person/:name', (req, res) => {
    db.query(`delete from person where name = '${req.params.name}'`, (err, data) => {
        if(!err) res.send({ person_res : data });
        else res.send(err);
    })
})

app.put('/api/update_person/:name&:age&:height', (req, res) => {
    db.query(`update person set age = ${req.params.age}, height=${req.params.height} where name = '${req.params.name}'`, (err, data) => {
        if(!err) res.send({ person_res : data });
        else res.send(err);
    })
})

app.put('/api/add_person/:name&:age&:height', (req, res) => {
    db.query(`insert into person(name, age, height) value('${req.params.name}', ${req.params.age}, ${req.params.height})`, (err, data) => {
        if(!err) res.send({ person_res : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})