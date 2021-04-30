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

app.post('/api/del_person', (req, res) => {
    //복구 쿼리
    /*
    insert into person values('이민호', 20, 178.5);
    insert into person values('송중기', 21, 176.7);
    insert into person values('정채연', 22, 165.2);
    */
    db.query("delete from person where name='송중기';", (err, data) => {
        if(!err) res.send({ person_res : data });
        else res.send(err);
    })
})

app.delete('/api/delete_person/:name', (req, res) => {
    var query ="delete from person where name="+"'"+req.params.name+"'";

    db.query(query, (err, data) => {
        //console.log("req.name"+req.name);

        if(!err) res.send({ person_res : data });
        else res.send(err);
    })

});


app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})