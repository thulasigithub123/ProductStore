
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config();

const app  = express();


// create a route
app.get("/", (req,res) => {
    res.send("server is ready")
})


app.listen(5000, () => {
    connectDB();
    console.log("server started at http://localhost:5000")
})

// p1OtDp4fKhPWK1kb