import 'dotenv/config'
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import express, { json } from "express"
import connectDB from "./db/index.js";

connectDB();


// const app = express();
// ;(async()=>{
//     try {
//        await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("errorrrrr",error);
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`port is listening on ${process.env.PORT}`);
//        })
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// })()
