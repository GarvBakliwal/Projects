const e = require('express');
const userData = require('../model/userModel.js');

exports.create = async (req, res) => {
    try {
        const { email } = req.body;
        const isExistingUser = await userData.findOne({ email });
        if (isExistingUser) {
           return res.status(409).send("User Already Exists")
        }
        const newUser = await userData.create(req.body);
        if (newUser) {
           return res.status(201).json({
                message: "User Created Successfully",
                data: newUser
            })
        }
    } catch (error) {
        res.status(400).send(error);
    }
}