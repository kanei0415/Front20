const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db');

app.get('/api/person', (req, res) => {
    db.query("SELECT * FROM person", (err, data) => {
        if(!err) res.send({ person_res : data });
        else res.send(err);
    })
})

app.get('/api/del_person', (req, res) => {
    //복구 쿼리
    //insert into person(name,age,height) values ('송중기',20,176.6);
    db.query("delete from person where name='송중기';", (err, data) => {
        if(!err) res.send({ person_res : data });
        else res.send(err);
    })
})

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})