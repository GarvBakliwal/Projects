const e = require('express');
const userData = require('../model/userModel.js');
const bcrypt = require('bcrypt');
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
exports.login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await userData.findOne({email})
        // console.log(user);
        if (!user) {
            return res.status(400).send('User is not registered, Please register and try again')
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if (!isPasswordMatch) {
            return res.status(400).send('Password do not Match')
        }
        res.status(200).json({
            message:"Login Successful"
        })
    }
    catch(error){
        res.status(400).json({message:error});
    }
}
exports.read = async (req, res) => {
    try {
        const allUsers = await userData.find();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).send(error);
    }
}
exports.readOne = async (req, res) => {
    const { id } = req.params;
    try {
        const singleUser = await userData.findById({ _id: id });
        if (singleUser) {
            return res.status(200).json(singleUser)
        }
        res.status(404).send("User not Found");
    } catch (error) {
        res.status(400).send(error);
    }
}
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    // console.log("get body", req.body);
    // console.log("get id", id);
    try {
        const updatedUser = await userData.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).send(error);
    }
}
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userData.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).send(error);
    }
}