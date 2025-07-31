import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
//app.use is for middlewares
// app.use(cors()) we can use cors like this only, but we can configure too

app.use(cors({
    origin: process.env.CROSS_ORIGIN,
    credentials:true,
}));

app.use(express.json({limit:"16kb"})) //accepting json
app.use(express.urlencoded({extended: true, limit:"16kb"})) // its okay to not write extended too. and urlencoded is used to handle how url might come in encoded form. for exmaple some url's have %20 instead of spaces.
app.use(express.static("public"));
app.use(cookieParser) // for using crud in cookies

export { app };
