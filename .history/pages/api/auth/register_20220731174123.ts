import { connectDB } from '../../../utils/connectDB'
import { Request, Response} from 'express'
import jwt from 'jsonwebtoken'
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

        const foundEmail = await userModel.findOne({ mail })
        if (foundEmail) return res.status(400).json({err: 'Email này đã được sử dụng cho một tài khoản khác.'})

        const passwordHash = await bcrypt.hash(password, 12)
        
        const user = await userModel.create({
            userName, mail, password: passwordHash, fullName
        })
        const token = jwt.sign({
            userId: user._id
        }, process.env.APP_SECRET || "")
        res.status(200).json({
            status: 'Register Success!',
        });
    } catch (err:any){
        return res.status(500).json({err: err.message})
    }
};