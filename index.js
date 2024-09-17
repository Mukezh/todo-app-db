const express = require('express');
const { UserModel, TodoModel } = require('./db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "belhbleh";
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mukeshoffcl:5vO4AcrmALtzT2ab@cluster0.zytcf.mongodb.net/todo');

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({
        name: name,
        email: email,
        password: password
    });
 
    // console.log(name);
    // console.log(email);
    // console.log(password);
    res.json({
        message: "You are logged in"
    })

});

app.post("/signin", async function(req,res) {
    const email = req.body.email;
    const password = req.body.email;

    const user = await UserModel.findOne({
        email: email,
        password: password 
    })


    if(user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});

app.post("/todo", function(req,res) {

});

app.get("/todos", function(req,res) {

});

app.listen(3000);