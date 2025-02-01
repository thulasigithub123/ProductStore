
import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

dotenv.config();

const app  = express();
const port = process.env.PORT || 5000
app.use(express.json()); // middleware allows us to access json data in req.body


app.use("/products",productRoutes)

app.listen(port, () => {
    connectDB();
    console.log("server started at http://localhost:" + port)
})

// p1OtDp4fKhPWK1kb