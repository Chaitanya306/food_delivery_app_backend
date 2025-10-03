import {pushAllFoodItems} from './Push_foodItems.js'
import {router} from './controller.js';

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./db.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router)


/*
app.listen(process.env.PORT, async () => {
    await connectDB();
    //pushAllFoodItems()
    console.log(`server is running on port ${process.env.PORT}`);
    
})
    */
await connectDB()

export default app
