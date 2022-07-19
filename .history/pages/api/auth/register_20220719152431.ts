import { connectDB } from '../../../utils/connectDB'
import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'
import valid from '../../../utils/valid'
import bcrypt from "bcryptjs";
import { userModel } from '../../../models/userModel';
connectDB()

export default async (req:Request, res:Response) => {
    switch(req.method){
        case "POST":
            await register(req,res)
            break;
    }
}

const register = async (req:Request, res:Response) => {
    try {
        const {userName, mail, password, fullName} = req.body

        const errMsg = valid(mail, password)
        if(errMsg) return res.status(400).json({err: errMsg})

        const foundEmail = await userModel.findOne({ mail })
        if (foundEmail) return res.status(400).json({err: 'Another account is using the same email.'})

        const foundUserName = await userModel.findOne({ userName })
        if (foundUserName) return res.status(400).json({err: 'This username is already registered'})

        const passwordHash = await bcrypt.hash(password, 12)
        
        const user = await userModel.create({
            userName, mail, password: passwordHash, fullName
        })
        const token = jwt.sign({
            userId: user._id
        }, process.env.APP_SECRET || "")
        res.status(200).json({
            status: 'Register Success!',
            data: {
                token,
            }
        });
    } catch (err:any){
        return res.status(500).json({err: err.message})
    }
};