const app = require('express')();
const mongoose = require('mongoose');
const userData = require('./model/userModel.js');
const dbConnect = async () => {
    try {
        const connection = await mongoose.connect("mongodb://localhost:27017/crud")
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnect;