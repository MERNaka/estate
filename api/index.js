import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose
    .connect(`mongodb+srv://menaka:${process.env.MONGODB_PASSWORD}@cluster0.fwdfgwh.mongodb.net/?retryWrites=true&w=majority`)
    .then(()=>{
        console.log("connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    })
    const app = express();

app.listen(3000, ()=>{
    console.log('listening to 3000!!!')
})