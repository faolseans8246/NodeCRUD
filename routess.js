const express = require("express")
const route = express.Router()
const myuser = require('./user')

// Pert of create
route.post('/save', (req, res) => {
    let user = req.body

    myuser.create(user, (err, result) => {
        if (err) throw err
        res.send("User added ...")
    });
});


// Read
route.get("/take", (req, res) => {
    myuser.getAll((err, result) => {
        if (err) throw err
        res.json(result)
    });
});

// Update
route.put("/change/:id", (req, res) => {
    let newUser = req.body

    myuser.updates(req.params.id, newUser, (err, result) => {
        if (err) throw err
        res.send("user changed ...")
    });
});


// Delete
route.delete("/delete/:id", (req, res) => {

    myuser.deletes(req.params.id, (err, result) => {
        if (err) throw err
        res.send("User deleted ...")
    });
});

module.exports = route;