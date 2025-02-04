import e, { Router } from "express";
import mongoose from "mongoose";
import userModel from "./models/userModel.js";
import router from "./routes/userRoutes.js";
const app = e();
app.use(e.json());
app.use('/api',router)
const MONGOURL = "mongodb://localhost:27017/RegistrationCRUD";

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database successfully connected");
    app.listen(3000,()=>{
        console.log(`Server is running`);
    })
}).catch((error)=>console.log(error));