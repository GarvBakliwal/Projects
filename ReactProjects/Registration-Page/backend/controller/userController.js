import e from "express";
import userModel from "../models/userModel.js";
import pkg from 'body-parser';
const { json } = pkg;

const create = async(req,res)=>{
    try {
        const { email } = req.body;
        const isExistingUser = await userModel.findOne({ email });
        if (isExistingUser) {
            return res.status(409).send("User Already Exists")
        }
        const newUser = await userModel.create(req.body);
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
const getUsers = async(req,res)=>{
    try {
        const allUsers = await userModel.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).send(error);
    }
}
export default getUsers;