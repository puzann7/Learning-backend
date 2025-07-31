import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async ()=>{
    try {
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
   console.log(`\n mongodb connected!! DB Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

//note: this connectDB function, since its asynchronous, it will also return a promise. so we can also to connectDB().then and .catch.

export default connectDB
