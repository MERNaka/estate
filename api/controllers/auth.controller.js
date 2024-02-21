import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const signup = async(req, res, next)=>{
    const {username, password, email} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10)
    const newUser = new User({username, password: hashedPassword, email})
    try{
        await newUser.save()
        res.status(201).json({message: "User created successfully"})
    }
    catch(error){
        next(error)
    }
}

export const signin = async(req, res, next)=>{
    const { email, password } = req.body
    try{
        const vaildUser = await User.findOne({ email })
        if(!vaildUser) return next(errorHandler(404, 'User not found'))
        const validPassword = bcryptjs.compareSync(password, vaildUser.password)
        if(!validPassword) return next(errorHandler(401, 'Wrong credentials'))
        const token = jwt.sign({ id: vaildUser._id}, process.env.JWT_SECRET)
        const { password: pass, ...rest } = vaildUser._doc;
        res
            .cookie('access_token', token, {httpOnly: true})
            .status(200)
            .json(rest)
    }
    catch(error){
        next(error)
    }
}