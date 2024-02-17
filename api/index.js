import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
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
app.use(express.json())

app.listen(3000, ()=>{
    console.log('listening to 3000!!!')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)