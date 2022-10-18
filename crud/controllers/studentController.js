'use strict';

const { collection } = require("firebase/firestore");
const {firestore} = require("../db")
const Student = require('../models/student');

// const firestore = firebase().firestore();

const addStudent = async(req, res, next) => {
    try{
        const data = req.body;
        const aa = await firestore.collection('students').doc().set(data);
        // collection(firestore, 'students', )
        res.send('Record saved successfully' + aa);
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addStudent
}