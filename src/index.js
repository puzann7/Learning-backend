import 'dotenv/config'
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import express, { json } from "express"
import connectDB from "./db/index.js";
import { app } from './app.js';

//note: when using middlewares, we use app.use()

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.log("handing error",err);
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`poojan's server running at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("there was some error here",err);
})






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
