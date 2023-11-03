const express = require("express");
const userScheme = require("../models/user")

const router = express.Router();

//create user
router.post('/users', (req,res) => {
    const user = userScheme(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

//get all user
router.get('/users', (req,res) => {
    userScheme
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

//get user
router.get('/users/:instalacion', (req,res) => {
    const { instalacion } = req.params;
    userScheme
    .find({instalacion})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

module.exports = router;

