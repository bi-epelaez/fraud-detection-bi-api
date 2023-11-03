const express = require("express");
const userScheme = require("../models/transaction")

const router = express.Router();

//create user
router.post('/transaction', (req,res) => {
    const user = userScheme(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

//get all user
router.get('/transaction', (req,res) => {
    userScheme
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

//get user
router.get('/transaction/:PrimaryAccountNumber', (req,res) => {
    const { PrimaryAccountNumber } = req.params;
    userScheme
    .find({PrimaryAccountNumber})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}))
});

module.exports = router;

