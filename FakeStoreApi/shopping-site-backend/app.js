const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnect = require('./server.js');
const router = require('./routes/userRoute.js');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api',router)

app.get('/',(req,res)=>{
    res.send("App is Running")
})

dotenv.config();
app.listen(process.env.PORT,async ()=>{
    await dbConnect();
    console.log(`Server is Successfully running on Port : ${process.env.PORT}`);
})